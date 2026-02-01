import { render } from 'preact'
import './index.css'
import App from './App'
import MainProvider from './context/MainContext'

render(
  <MainProvider>
    <App />
  </MainProvider>
, document.getElementById('app'))
