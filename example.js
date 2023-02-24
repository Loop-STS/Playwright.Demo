const fs = require('fs');

const data = fs.readFileSync('har/har1/booksapi.har');
const harData = JSON.parse(data);
const entries = harData.log.entries;

console.log(entries);

function extractRequestUrls(entries) {
  const urls = [];

  entries.forEach((entry) => {
    urls.push(entry.request.url);
  });

  return urls;
}
    
  const requestUrls = extractRequestUrls(entries);
  
  console.log(requestUrls); // Output: ["https://bookcart.azurewebsites.net/api/Wishlist/79831", "https://bookcart.azurewebsites.net/api/user/79831", ...]
  
  
  function createWaitForResponseCalls(urls) {
    return urls.map(url => `page.waitForResponse(response => response.url().includes("${url}") && response.status() === 200, {timeout: 60000}),`);
  }
  
  const waitForResponseCalls = createWaitForResponseCalls(requestUrls);
  console.log(waitForResponseCalls.join('\n'));


  function replaceBaseUrlWithTemplateString(arr, baseUrl) {
    const templateString = '${base.url}';
    const replacedArr = arr.map(str => str.replace(baseUrl, templateString));
    return replacedArr;
  }
  
  const baseUrl = 'https://bookcart.azurewebsites.net/';

  const templateStrings = replaceBaseUrlWithTemplateString(waitForResponseCalls, baseUrl);
  console.log(templateStrings);

  const updateFunction = (arr) => {
    return arr.map((str) => {
      return str.replace(/"/g, '`');
    });
  };

  const updatedTemplateStrings = updateFunction(templateStrings);
  console.log(updatedTemplateStrings);

  // function convertStringArrayToFunctionArray(stringArray) {
  //   const functionArray = [];
  //   for (const str of stringArray) {
  //     const fn = eval(`(${str})`);
  //     functionArray.push(fn);
  //   }
  //   return functionArray;
  // }
  
  // const functionArray = convertStringArrayToFunctionArray(updatedTemplateStrings);
  // console.log(functionArray);
  
