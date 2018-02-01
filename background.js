// this acts as a proxy for the content scripts in the different iframes to talk to each other
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	chrome.tabs.sendMessage(sender.tab.id, message, function(response) {});
});