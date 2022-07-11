import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './components/app/App'

const divHTMLElement = document.getElementById('app')

ReactDOM
  .createRoot(divHTMLElement)
  .render(<App />)
