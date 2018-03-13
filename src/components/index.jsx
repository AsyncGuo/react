import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import ADemo from './ADemo'
import BDemo from './BDemo'
import CDemo from './CDemo'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <Route exact path="/" component={ADemo}></Route>
          <Route path="/b" component={BDemo}></Route>
          <Route path="/c" component={CDemo}></Route>
        </div>
      </Router>
    )
  }
}

export default App
