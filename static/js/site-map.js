const siteMapToggle = document.getElementById('site-map-toggle-btn');
const siteMapContainer = document.querySelector('.site-map');
const siteMapUntoggle = document.getElementById('site-map-untoggle-btn');

const header = document.querySelector('header.layout-element');
const toc = document.querySelector('.toc');
const page = document.querySelector('.page');

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
        if (!section.contains(document.querySelector('.note-link.highlighted'))) {
            // Check if the section does not contain a highlighted note link
            section.classList.toggle('toggled');
            sectionIcon.classList.toggle('fa-angle-right');
            sectionIcon.classList.toggle('fa-angle-down');
        }

        if (!section.classList.contains('toggled')) {
            const childSections = section.querySelectorAll('.site-map-section');
            childSections.forEach((childSection) => {
                untoggleChildSections(childSection);
            });
        }
    });
});

const noteLinks = document.querySelectorAll('.note-link');

noteLinks.forEach((noteLink) => {
    currentURL = window.location.pathname;
    linkHref = noteLink.getAttribute('href');

    if (linkHref === currentURL) {
        noteLink.classList.add('highlighted');
    } else {
        noteLink.classList.remove('highlighted');
    }
});

const highlightedLinks = document.querySelectorAll('.note-link.highlighted');

highlightedLinks.forEach((highlightedLink) => {
    const section = highlightedLink.closest('.site-map-section');

    if (section) {
        section.classList.add('toggled');
        const sectionButton = section.querySelector('.section-button');
        if (sectionButton) {
            sectionButton.querySelector('.section-icon').classList.toggle('fa-angle-right');
            sectionButton.querySelector('.section-icon').classList.toggle('fa-angle-down');
        }
        const parentSections = sectionParents(section);
        parentSections.forEach((parentSection) => {
            parentSection.classList.add('toggled');
            const parentSectionButton = parentSection.querySelector('.section-button');
            if (parentSectionButton) {
                parentSectionButton.querySelector('.section-icon').classList.toggle('fa-angle-right');
                parentSectionButton.querySelector('.section-icon').classList.toggle('fa-angle-down');
            }
        });
    }
});

function sectionParents(section) {
    const parent = section.parentElement;
    if (!parent || parent.classList.contains('site-map-content')) {
        return [];
    }
    return [parent, ...sectionParents(parent)];
}
