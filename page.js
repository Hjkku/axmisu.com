const themeBtn = document.getElementById('theme')
const themeIcon = themeBtn.querySelector('use')
const syncThemeIcon = () => themeIcon.setAttribute('href', `/icons/common.svg#${document.documentElement.dataset.theme === 'dark' ? 'ax-sun' : 'ax-moon'}`)

syncThemeIcon()
themeBtn.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = next
  localStorage.setItem('ax-theme', next)
  syncThemeIcon()
})
