import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Portfolio from './portfolio'
import Contact from './contact'
import App from './App'
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))