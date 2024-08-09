import { test as baseTest } from '@playwright/test';
import * as fs from 'fs';

const api = "https://bookcart.azurewebsites.net/api/"
const logFile = 'logFile.txt';
const actionsToIntercept = ['click', 'type', 'fill', 'hover', 'goto', 'press', 'dblclick'];

function addMarker(description: string) {
    const codeLine = `await ${description};\n`;
    fs.appendFileSync(logFile, codeLine);
}

function waitFor(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createNestedProxy(target: any, parentProp?: string): any {
    return new Proxy(target, {
        get(targetObj, prop: string) {
            const origMethod = targetObj[prop];

            if (typeof origMethod === 'function' && actionsToIntercept.includes(prop)) {
                return async (...args) => {
                    const result = await origMethod.apply(targetObj, args);
                    const marker = parentProp
                        ? `${parentProp}.${prop}(${args.map(arg => JSON.stringify(arg)).join(', ')})`
                        : `${prop}(${args.map(arg => JSON.stringify(arg)).join(', ')})`;

                    await waitFor(1000);  // Wait to ensure network activity related to the action is captured
                    addMarker(marker);
                    return result;
                };
            }

            if (typeof origMethod === 'object' && origMethod !== null) {
                return createNestedProxy(origMethod, prop);
            }

            return origMethod;
        }
    });
}

function createPageProxy(page) {
    return createNestedProxy(page);
}

async function setupNetworkInterception(page): Promise<void> {
    page.on('response', async response => {
        if (response.url().includes(api)) {
            const specificPath = response.url().replace(api, '');
            const codeLine = `await page.waitForResponse(resp => resp.url().includes('${specificPath}'));\n`;
            fs.appendFileSync(logFile, codeLine);
            await waitFor(1000);  // Ensure all related network activity is captured before moving on
        }
    });
}


const test = baseTest.extend<{ page: any }>({
    page: async ({ context }, use) => {
        const page = await context.newPage();
        setupNetworkInterception(page);
        const proxyPage = createPageProxy(page);
        await use(proxyPage);
    }
});

export default test;
