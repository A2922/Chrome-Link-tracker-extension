// background.js

// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.type === 'hyperlinks') {
      // Store hyperlinks data in local storage
      chrome.storage.local.get(['hyperlinks'], function(result) {
          const storedHyperlinks = result.hyperlinks || [];
          const updatedHyperlinks = storedHyperlinks.concat(message.data);
          chrome.storage.local.set({ hyperlinks: updatedHyperlinks });
      });
  }
});
