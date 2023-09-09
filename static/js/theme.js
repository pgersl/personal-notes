function setTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  
    localStorage.setItem('theme', theme);
    const themeIcon = document.getElementById('theme-icon');
    const logo = document.getElementById('header-logo-img')
    if (theme === 'light') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      logo.setAttribute('src', '/media/img/main/logo-light.png')
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      logo.setAttribute('src', '/media/img/main/logo-dark.png')
    }
  }
  
  function toggleTheme() {    
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
}
  
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    setTheme(storedTheme);
  } else {
    setTheme('light');
  }
  
const themeToggleBtn = document.getElementById('theme-btn');
themeToggleBtn.addEventListener('click', () => {
  toggleTheme()
});