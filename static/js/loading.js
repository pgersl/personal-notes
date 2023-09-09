function updateProgressBar(loaded, total) {
    const progressBar = document.querySelector('.progress-bar');
    const percentLoaded = (loaded / total) * 100;
    progressBar.style.width = percentLoaded + '%';

    if (loaded === total) {
        setTimeout(() => {
            hideLoadingScreen();  
        }, 600);
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0'
}

window.onload = () => {
    setTimeout(() => {
        const loadedResources = 5;
        const totalResources = 5;
        updateProgressBar(loadedResources, totalResources);
    }, 100);
};
