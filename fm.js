var element = document.getElementsByName('loginfmt')[0].value;
if (element != null && element.value == '') {
  console.log('Mail is not set, try to insert current user ');
}

function logTabs(windowInfo) {
  for (let tabInfo of windowInfo.tabs) {
    console.log(tabInfo.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var getting = browser.windows.getCurrent({populate: true});
  getting.then(logTabs, onError);
});

