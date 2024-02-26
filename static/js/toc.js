const tocContainer = document.getElementById('toc')
const tocUtil = document.getElementById('toc-toggle')

tocUtil.addEventListener('click', () => {
    tocContainer.classList.toggle('toggled-by-util')
})

const tocLinks = tocContainer.querySelectorAll('a');
tocLinks.forEach(link => {
    link.addEventListener('click', () => {
        tocContainer.classList.remove('toggled-by-util');
    });
});