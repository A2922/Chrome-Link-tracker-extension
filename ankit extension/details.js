chrome.storage.local.get(['hyperlinks'], (result) => {
    const hyperlinks = result.hyperlinks || [];
    const sitesMap = new Map();
    hyperlinks.forEach(link => {
      const hostname = new URL(link).hostname;
      if (!sitesMap.has(hostname)) {
        sitesMap.set(hostname, []);
      }
      sitesMap.get(hostname).push(link);
    });
  
    const tableBody = document.getElementById('detailsTableBody');
    sitesMap.forEach((hyperlinks, site) => {
      const row = document.createElement('tr');
      const siteCell = document.createElement('td');
      siteCell.textContent = site;
      row.appendChild(siteCell);
      const hyperlinksCell = document.createElement('td');
      hyperlinksCell.textContent = hyperlinks.join('\n');
      row.appendChild(hyperlinksCell);
      const occurrencesCell = document.createElement('td');
      occurrencesCell.textContent = hyperlinks.length;
      row.appendChild(occurrencesCell);
      tableBody.appendChild(row);
    });
  });
  