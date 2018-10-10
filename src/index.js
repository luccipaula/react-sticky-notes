import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './Board'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Board basename={process.env.PUBLIC_URL} />, document.getElementById('root'))
registerServiceWorker()
