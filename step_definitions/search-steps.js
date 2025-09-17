const { getActivePageObject } = require('klassijs-pageObject-selector');
const pageObjectMap = require('../shared-objects/pageObjectData');

let activePageObject;

Before((scenario) => {
  // Filter out null page objects
  const validPageObjectMap = {};
  for (const [tag, pageObject] of Object.entries(pageObjectMap)) {
    if (pageObject !== null) {
      validPageObjectMap[tag] = pageObject;
    }
  }
  
  activePageObject = getActivePageObject(validPageObjectMap);
  console.log('activePageObject ========================== 1 :', activePageObject);
  console.log('activePageObject methods:', Object.getOwnPropertyNames(activePageObject).filter(name => typeof activePageObject[name] === 'function'));
});

Given(/^The user arrives on the duckduckgo search page$/, async () => {
  await helpers.loadPage(env.base_url, 10);
});

When(/^they input (.*)$/, async (searchWord) => {
  if (!activePageObject || !activePageObject.performWebSearch) {
    throw new Error('The active page object does not have a performWebSearch method!');
  }
  await activePageObject.performWebSearch(searchWord);
});

Then(/^they should see some results (.*)$/, async (searchWord) => {
  if (!activePageObject || !activePageObject.searchResult) {
    throw new Error('The active page object does not have a searchResult method!');
  }
  await activePageObject.searchResult(searchWord);
});
