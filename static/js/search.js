const resultTemplate = document.getElementById('search-result-template');
const resultsContainer = document.getElementById('search-results');
const searchBar = document.getElementById('search-input');
const notFoundMessage = document.getElementById('not-found-message');
const searchResultsContainer = document.getElementById('search-results-container');

function performSearch(searchValue, data) {
  const matchingResults = data.filter(search => search.title.toLowerCase().includes(searchValue));
  
  matchingResults.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    
    if (titleA.startsWith(searchValue) && !titleB.startsWith(searchValue)) {
      return -1;
    } else if (!titleA.startsWith(searchValue) && titleB.startsWith(searchValue)) {
      return 1;
    } else {
      return 0;
    }
  });

  resultsContainer.innerHTML = '';

  if (matchingResults.length > 0) {
    matchingResults.forEach(search => {
      const result = resultTemplate.content.cloneNode(true).children[0];
      const resultTitle = result.querySelector('.search-result-title');
  
      resultTitle.textContent = search.title;
      resultTitle.setAttribute('href', search.link);

      resultsContainer.appendChild(result);
    });

    resultsContainer.style.display = 'flex';
    searchResultsContainer.style.display = 'block';
    notFoundMessage.style.display = 'none';
  } else {
    searchResultsContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    notFoundMessage.style.display = 'block';
  }
}

fetch('/index.json')
  .then(response => response.json())
  .then(data => {
    searchBar.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase().trim();
      if (val === '') {
        searchResultsContainer.style.display = 'none';
      } else {
        performSearch(val, data);
      }
    });
  });