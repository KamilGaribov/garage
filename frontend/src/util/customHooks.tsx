import { useState } from 'react'
import { INITIAL_THEME } from './constants'

export const useLocalStorage = (key: string, INITIAL_THEME: string) => {
  const [state, setState] = useState(() => {
    if (typeof window !== 'undefined') {
      const storage = window.localStorage.getItem(key)
      return storage ? JSON.parse(storage) : INITIAL_THEME
    }
  })
  const updateState = (value: string) => {
    window.localStorage.setItem(key, JSON.stringify(value))
    setState(value)
  }
  return [state, updateState]
}

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', INITIAL_THEME)
  const updateTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light')
  }
  return [theme, updateTheme]
}
