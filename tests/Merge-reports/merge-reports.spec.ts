/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author Anoop Raveendran
 */

 import path from "path";
 import { test } from '@playwright/test';
 
 import { mergeHTMLReports } from "./merge-reports";
 
 mergeHTMLReports([
   path.resolve(process.cwd(), "./playwright-report-1_5"),
   path.resolve(process.cwd(), "./playwright-report-2_5"),
   path.resolve(process.cwd(), "./playwright-report-3_5"),
   path.resolve(process.cwd(), "./playwright-report-4_5"),
   path.resolve(process.cwd(), "./playwright-report-5_5"),
   path.resolve(process.cwd(), "./storage-tests-report-1_2"),
   path.resolve(process.cwd(), "./storage-tests-report-2_2"),
   path.resolve(process.cwd(), "./playwright-report-storageState"),

 ], { outputFolderName: './test-merge-report-demo' });
 
 test('Merge Reports', async ({ page }) => {
   mergeHTMLReports
 })
 