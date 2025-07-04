import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './provider/routes'
import { Provider } from 'react-redux'
import { setupStore } from './appStore'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={setupStore()}>
      <RoutesApp />
    </Provider>
  </BrowserRouter>
)
