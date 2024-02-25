const siteMapUtil = document.getElementById('site-map-toggle')
const siteMapContainer = document.getElementById('site-map');

// Toggling the site map on smaller view width

siteMapUtil.addEventListener('click', () => {
    siteMapContainer.classList.toggle('toggled-by-util')
})

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
    const section = sectionBtn.parentElement;
    sectionBtn.addEventListener('click', () => {
        section.classList.toggle('toggled');
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
        const parentSections = sectionParents(section);
        parentSections.forEach((parentSection) => {
            parentSection.classList.add('toggled');
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
