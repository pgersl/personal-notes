const siteMapToggle = document.getElementById('site-map-toggle-btn');
const siteMapContainer = document.querySelector('.site-map');
const siteMapUntoggle = document.getElementById('site-map-untoggle-btn');

const header = document.querySelector('header.layout-element');
const toc = document.querySelector('.toc');
const page = document.querySelector('.page');

// Site-map toggling on smaller screens 
siteMapToggle.addEventListener('click', () => {
    siteMapContainer.classList.toggle('toggled');
    header.style.display = 'none';
    toc.style.display = 'none';
    page.style.display = 'none';
});

siteMapUntoggle.addEventListener('click', () => {
    siteMapContainer.classList.toggle('toggled');
    header.style.display = '';
    toc.style.display = '';
    page.style.display = '';
});

// Untoggle all child sections when a parent is un toggled

function untoggleChildSections(section) {
    section.classList.remove('toggled');
    const childSections = section.querySelectorAll('.site-map-section');
    childSections.forEach((childSection) => {
        untoggleChildSections(childSection);
    });
}

const sectionBtns = document.querySelectorAll('.section-button');

sectionBtns.forEach((sectionBtn) => {
    const section = sectionBtn.parentElement.parentElement;

    const sectionIcon = sectionBtn.querySelector('.section-icon');
    sectionBtn.addEventListener('click', () => {
        // Check if the section does not have a highlighted link 
        if (!section.contains(document.querySelector('.note-link.highlighted'))) {
            section.classList.toggle('toggled');
            sectionIcon.classList.toggle('fa-angle-right');
            sectionIcon.classList.toggle('fa-angle-down');
        }
        // Check if the section does not have toggled as a class, if not, untoggle all child sections
        if (!section.classList.contains('toggled')) {
            const childSections = section.querySelectorAll('.site-map-section');
            childSections.forEach((childSection) => {
                untoggleChildSections(childSection);
            });
        }
    });
});

const noteLinks = document.querySelectorAll('.note-link');
// Highlight the link that is now displayed
noteLinks.forEach((noteLink) => {
    const currentURL = window.location.pathname;
    const linkHref = noteLink.getAttribute('href');

    if (linkHref === currentURL) {
        noteLink.classList.add('highlighted');
    } else {
        noteLink.classList.remove('highlighted');
    }
});

const highlightedLinks = document.querySelectorAll('.note-link.highlighted');
// Toggle section that contains a higlighted link and its parents
highlightedLinks.forEach((highlightedLink) => {
    const section = highlightedLink.closest('.site-map-section');

    if (section) {
        section.classList.add('toggled');
        const sectionButton = section.querySelector('.section-button');
        if (sectionButton) {
            sectionButton.querySelector('.section-icon').classList.remove('fa-angle-right');
            sectionButton.querySelector('.section-icon').classList.add('fa-angle-down');
        }
        const parentSections = sectionParents(section);
        parentSections.forEach((parentSection) => {
            parentSection.classList.add('toggled');
            const parentSectionButton = parentSection.querySelector('.section-button');
            if (parentSectionButton) {
                parentSectionButton.querySelector('.section-icon').classList.remove('fa-angle-right');
                parentSectionButton.querySelector('.section-icon').classList.add('fa-angle-down');
            }
        });
    }
});

function sectionParents(section) {
    const parent = section.parentElement.parentElement;
    if (!parent || parent.classList.contains('site-map')) {
        return [];
    }
    return [parent, ...sectionParents(parent)];
}
