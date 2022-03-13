import { ICar } from '../components/card'

interface ILocalStorage {
  basket: {
    cars: ICar[]
    total: number
  }
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('basket')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: ILocalStorage) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('basket', serializedState)
  } catch (err) {
    console.log('error', err)
  }
}

export const persistedState = loadState()
