const tocContainer = document.querySelector('.toc')
const tocButton = document.getElementById('toc-toggle-btn')
const tocIcon = document.getElementById('toc-toggle-icon')
const tocLinks = document.querySelectorAll('.toc-content a')


tocButton.addEventListener('click', () => {
    tocContainer.classList.toggle('toggled')
    tocIcon.classList.toggle('fa-list')
    tocIcon.classList.toggle('fa-xmark')
})
tocLinks.forEach(function(tocLink) {
    tocLink.addEventListener('click', () => {
        tocContainer.classList.remove('toggled')
        tocIcon.classList.remove('fa-xmark')
        tocIcon.classList.add('fa-list')
    })
})

const headings = document.querySelectorAll('h1, h2, h3');
const tocItems = document.querySelectorAll('.toc-content a');

function highlightTocItem(index) {
  tocItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('highlighted');
    } else {
      item.classList.remove('highlighted');
    }
  });
}

function getCurrentActiveHeading() {
  for (let i = headings.length - 1; i >= 0; i--) {
    if (headings[i].getBoundingClientRect().top < window.innerHeight / 4) {
      return i;
    }
  }
  return 0;
}

window.addEventListener('scroll', () => {
  const activeHeadingIndex = getCurrentActiveHeading();
  highlightTocItem(activeHeadingIndex);
});

const initialActiveHeadingIndex = getCurrentActiveHeading();
highlightTocItem(initialActiveHeadingIndex);