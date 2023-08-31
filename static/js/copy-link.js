const copyButton = document.getElementById('copy-link-btn')

copyButton.addEventListener('click', () => {
    const url = window.location.href
    const tempInput = document.createElement('input')
    
    tempInput.style.position = "absolute";
    tempInput.style.left = "-1000px";
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert('Link copied to clipboard!')
})