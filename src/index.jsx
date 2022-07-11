import React from 'react'
import ReactDOM from 'react-dom'
import FHIR from 'fhirclient'
import App from './components/app/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

console.info('index.jsx')

FHIR
  .oauth2
  .init({
    clientId: '20560ea5-f224-4658-b667-4e6bab935c85',
    scope: 'launch/patient openid profile'
  })
  .then(client => {
    console.debug('client', client)
    const divHTMLElement = document.getElementById('app')
    ReactDOM.render(<App client={client} />, divHTMLElement)
  })
