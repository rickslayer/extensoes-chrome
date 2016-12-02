chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file:  "js/jquery-min.js"});
   chrome.tabs.executeScript(null, {file:  "js/app.js"});
});