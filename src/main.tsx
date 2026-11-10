import React from 'react'
import ReactDOM from 'react-dom/client'
import '../design-system/tokens.css'
import '../design-system/components/bundle.css'
import './styles.css'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)