const goUpButton = document.getElementById('go-up-button');

function isNavInView() {
  const navElement = document.querySelector('nav');
  const navRect = navElement.getBoundingClientRect();
  return navRect.bottom > 0;
}

function toggleButtonVisibility() {
    if (isNavInView()) {
      goUpButton.style.opacity = '0'; 
    } else {
      goUpButton.style.opacity = '1';
    }
  }

toggleButtonVisibility();

window.addEventListener('scroll', toggleButtonVisibility);