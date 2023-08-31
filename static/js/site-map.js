const siteMapToggle = document.getElementById('site-map-toggle-btn')
const siteMapContainer = document.querySelector('.site-map')
const siteMapUntoggle = document.getElementById('site-map-untoggle-btn')

const header = document.querySelector('header.layout-element')
const toc = document.querySelector('.toc')
const page = document.querySelector('.page')

siteMapToggle.addEventListener('click', () => {
    siteMapContainer.classList.toggle('toggled')
    header.style.display = 'none'
    toc.style.display = 'none'
    page.style.display = 'none'
})

siteMapUntoggle.addEventListener('click', () => {
    siteMapContainer.classList.toggle('toggled')
    header.style.display = ''
    toc.style.display = ''
    page.style.display = ''
})