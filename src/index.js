
import React from 'react'
import { render } from 'react-dom'

import App from './App.js'
import './index.css'

render(<App/>, document.getElementById('root'))


if (module.hot) {
  module.hot.accept()
}
