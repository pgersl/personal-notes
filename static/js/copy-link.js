const copyButton = document.getElementById('copy-link-btn');
const copyIcon = document.getElementById('copy-link-icon');

copyButton.addEventListener('click', () => {
    const url = window.location.href;
    const tempInput = document.createElement('input');
    
    tempInput.style.position = "absolute";
    tempInput.style.left = "-1000px";
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    copyIcon.classList.remove('fa-link');
    copyIcon.classList.add('fa-check');

    setTimeout(() => {
        copyIcon.classList.remove('fa-check');
        copyIcon.classList.add('fa-link');
    }, 1000);
});