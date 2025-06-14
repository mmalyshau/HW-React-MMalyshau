import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/noCSS.css'
import '@styles/index.scss'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
              <Provider store={store}>
                    <App />
                </Provider>
        </BrowserRouter>
  </StrictMode>,
)
