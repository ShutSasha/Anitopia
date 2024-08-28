import React, { createContext, useState, useContext, useEffect, ReactNode, FC } from 'react'

export interface ISiteColors {
  blackTheme: {
    backdrop: string
    main: string
    textPrimary: string
    textSecondary: string
    focusing: string
  }
  whiteTheme: {
    backdrop: string
    main: string
    textPrimary: string
    textSecondary: string
    focusing: string
  }
}

export const siteColors: ISiteColors = Object.freeze({
  blackTheme: {
    backdrop: '#1A1A1D', // main background || #0f0f0f
    main: '#2A2A2D', // background for fields which will fill in different content || #272727
    textPrimary: '#EDEDED', // default text color || or #f1f1f1
    textSecondary: '#CFCFCF', // color for additional text || or #aaa
    focusing: '#7474F7', // color for focus things like buttons, links etc.. // #3f3f3f better if we use main
  },
  whiteTheme: {
    backdrop: '#fff',
    main: '#f2f2f2',
    textPrimary: '#0f0f0f',
    textSecondary: '#606060',
    focusing: '#e5e5e5',
  },
})

interface IThemeContext {
  theme: keyof ISiteColors
  toggleTheme: () => void
}

const defaultContextValue: IThemeContext = {
  theme: 'blackTheme',
  toggleTheme: () => {},
}

const ThemeContext = createContext<IThemeContext>(defaultContextValue)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState<keyof ISiteColors>('blackTheme')

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as keyof ISiteColors) || 'blackTheme'
    setTheme(savedTheme)
    document.body.style.backgroundColor = siteColors[savedTheme].backdrop
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = siteColors[theme].backdrop
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = (): void => {
    const newTheme: keyof ISiteColors = theme === 'whiteTheme' ? 'blackTheme' : 'whiteTheme'
    setTheme(newTheme)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = (): IThemeContext => useContext(ThemeContext)
