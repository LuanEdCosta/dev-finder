import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import * as ServiceWorker from './ServiceWorker'
import './config/IconLibrary'
import './styles/global.scss'

ReactDOM.render(<App />, document.getElementById('root'))
ServiceWorker.unregister()
