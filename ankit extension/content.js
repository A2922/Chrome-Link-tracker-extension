// content.js

// Function to extract hyperlinks from the current page
function extractHyperlinks() {
    const hyperlinks = [];
    document.querySelectorAll('a').forEach(link => {
        hyperlinks.push({
            url: link.href,
            text: link.innerText.trim()
        });
    });
    return hyperlinks;
}

// Send hyperlinks data to the background script
function sendHyperlinksToBackground(hyperlinks) {
    chrome.runtime.sendMessage({ type: 'hyperlinks', data: hyperlinks });
}

// Execute content script when the page is fully loaded
window.onload = function() {
    const hyperlinks = extractHyperlinks();
    sendHyperlinksToBackground(hyperlinks);
};
