import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div classname="Header">
    <div classname="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/download">Courses</Link>
      <Link to="/workshops">Courses</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
    
  </div>
)

export default Header
