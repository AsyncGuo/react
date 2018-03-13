import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'
// import 'styles/App.css'

class Nav extends React.Component {
  constructor(...props){
    super(...props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="nav">
        <NavLink exact to="/">A</NavLink>&nbsp;&nbsp;
        <NavLink to="/b">B</NavLink>&nbsp;&nbsp;
        <NavLink to="/c">C</NavLink>
      </div>
    )
  }
}

export default Nav
