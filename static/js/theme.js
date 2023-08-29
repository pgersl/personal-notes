function setTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  
    localStorage.setItem('theme', theme);
    const themeIcon = document.getElementById('theme-icon');
    if (theme === 'light') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
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