// popup.js

// Function to update popup UI with hyperlinks statistics
function updatePopupUI() {
    chrome.storage.local.get(['hyperlinks'], function(result) {
        const hyperlinks = result.hyperlinks || [];
        const totalSites = new Set(hyperlinks.map(link => new URL(link.url).hostname)).size;
        const totalHyperlinks = hyperlinks.length;
        
        document.getElementById('totalSites').textContent = totalSites;
        document.getElementById('totalHyperlinks').textContent = totalHyperlinks;

        const detailsDiv = document.getElementById('details');
        const detailsButton = document.getElementById('showDetails');
        const tableBody = document.querySelector('#hyperlinkTable tbody');
        tableBody.innerHTML = '';

        hyperlinks.forEach(link => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${new URL(link.url).hostname}</td>
                <td><a href="${link.url}" target="_blank">${link.text}</a></td>
                <td>1</td>
            `;
            tableBody.appendChild(row);
        });

        detailsButton.onclick = function() {
            detailsDiv.style.display = 'block';
        };
    });
}

// Update popup UI when popup is opened
updatePopupUI();