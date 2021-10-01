
  // to get the navbar in a smaller screen
  // the parameter represent a ref hook of navbar
export const toggleNav = navRef => {
  navRef.current.classList.toggle('-top-52')
  navRef.current.classList.toggle('top-14')
  navRef.current.classList.toggle('sm:top-16')
  setTimeout(() => {
    navRef.current.classList.toggle('opacity-0')
    navRef.current.classList.toggle('opacity-100')
  }, 10)
}

// this is just toggling between dark mode and light, adding class 'light' or 'dark' to the html element
export const setColor = () => {
  const htmlClassName = localStorage.getItem('NJP_ColorTheme')
  const html = document.documentElement
  if (htmlClassName) html.className = htmlClassName
}

// this is the reference for toggling between dark mode and light, adding class 'light' or 'dark' to the html element
// isDark is the state hook, and setIsDark is the dispatch action from useState hook,
export const toggleTheme = (isDark, setIsDark) => {
  setIsDark(!isDark)
  if (isDark) {
    localStorage.removeItem('NJP_ColorTheme')
    localStorage.setItem('NJP_ColorTheme', 'dark')
    setColor()
  } else {
    localStorage.removeItem('NJP_ColorTheme')
    localStorage.setItem('NJP_ColorTheme', 'ligth')
    setColor()
  }
}
