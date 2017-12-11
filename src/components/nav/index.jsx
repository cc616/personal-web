import React, { Component } from 'react'
import PropTypse from 'prop-types'
import { NavLink } from 'react-router-dom'

import './style.scss'

class Nav extends Component {
  static propTypse = {
    navMenu: PropTypse.arrayOf(PropTypse.shape({})).isRequired,
  }
  render() {

    const { navMenu } = this.props

    const menuList = navMenu.map((item, index) => (
      <li className='menu' key={index}>
        <NavLink to={item.path} activeClassName='active'>
          {item.title}
        </NavLink>
      </li>
    ))

    return (
      <ul className='nav-wrapper'>
        {menuList}
      </ul>
    )
  }
}

export default Nav
