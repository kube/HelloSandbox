import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic.</h2>
      <h3>Do edit to see some magic.</h3>
      <h4>Do edit to see some magic.</h4>
      <h5>Do edit to see some magic.</h5>
      <h6>Do edit to see some magic.</h6>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
