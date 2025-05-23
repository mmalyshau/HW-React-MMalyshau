import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/noCSS.css'
import '@styles/index.scss'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@context'
import { CartProvider } from '@context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <AuthProvider>
              <CartProvider>
                    <App />
                </CartProvider>
            </AuthProvider>
        </BrowserRouter>
  </StrictMode>,
)
