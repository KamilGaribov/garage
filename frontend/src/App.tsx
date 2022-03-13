import { createStore, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './store/reducers/index'
import { GlobalStyle, initialTheme } from './util/globalstyle'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/index'
import Car from './pages/car/index'
import Navbar from './components/navbar'
import { useTheme } from './util/customHooks'
import { saveState, persistedState } from './util/localStorage'

const store = createStore(reducer, persistedState, applyMiddleware(thunk))
store.subscribe(() => {
  saveState({
    basket: { cars: store.getState().basket.cars, total: store.getState().basket.total }
  })
})

const routes = [
  { path: '', name: 'Home', element: <Home /> },
  { path: 'car/*', name: 'Cars', element: <Car /> }
]

function App() {
  const [theme, setTheme] = useTheme()
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme == 'light' ? initialTheme.light : initialTheme.dark}>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
