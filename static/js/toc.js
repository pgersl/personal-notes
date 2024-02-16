const tocContainer = document.getElementById('toc')
const tocUtil = document.getElementById('toc-toggle')

tocUtil.addEventListener('click', () => {
    tocContainer.classList.toggle('toggled-by-util')
})