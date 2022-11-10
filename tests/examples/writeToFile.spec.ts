import { test, expect } from '@playwright/test';
import fs from 'fs';

test('example test', async ({}) => {
  //const file = testInfo.outputPath('output', 'temporary-file.txt');
  await fs.promises.writeFile('writeTo.json', '{"ben": "body"}');
});