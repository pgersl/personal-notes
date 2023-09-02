const searchButton = document.getElementById('search-btn')
const searchCloseButton = document.getElementById('close-search-btn')
const siteHeader = document.querySelector('header')

searchButton.addEventListener('click', () => {
    siteHeader.classList.add('search-toggled')
})
searchCloseButton.addEventListener('click', () => {
    siteHeader.classList.remove('search-toggled')
})

const resultTemplate = document.getElementById('search-result-template');
const resultsContainer = document.getElementById('search-results');
const searchBar = document.getElementById('search-input');
const notFoundMessage = document.getElementById('not-found-message');
const searchResultsContainer = document.querySelector('.search-results-container');

function performSearch(searchValue, data) {
  const matchingResults = data.filter(search => search.title.toLowerCase().includes(searchValue));
  resultsContainer.innerHTML = '';

  if (matchingResults.length > 0) {
    matchingResults.forEach(search => {
      const result = resultTemplate.content.cloneNode(true).children[0];
      const resultTitle = result.querySelector('.search-result-title');
      const resultPath = result.querySelector('.search-result-path');
  
      resultTitle.textContent = search.title;
      resultTitle.setAttribute('href', search.link);
      resultPath.textContent = search.link;
  
      resultsContainer.appendChild(result);
    });
    resultsContainer.style.display = 'block';
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