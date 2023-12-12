import { createContext, useState } from "react";

export const ThemeContext = createContext()

function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light')
  const handleChangeTheme = () => {
    setTheme(theme === 'light'? 'dark': 'light');

  }
  const value = {
    theme, 
    handleChangeTheme
  }

  return (
    <ThemeContext.ThemeProvider value={value}>
        {children}
    </ThemeContext.ThemeProvider>
  )
}

export default ThemeProvider