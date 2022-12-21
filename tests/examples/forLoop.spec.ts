
import { test, expect } from '@playwright/test';

const scoreFactors = this.page.locator('[class="ant-modal-content"] >> b')
const factorCount = await scoreFactors.count();

for (var index= 0; index < factorCount ; index++) {
            const element = await scoreFactors.nth(index);
            const innerText: string = await element.innerText();
            const stringParse =/\d+/g.exec(innerText!)
            const total = stringParse![0]
            texts.push(total);
        }