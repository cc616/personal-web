import React, { Component } from 'react'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import './style.scss'

class Header extends Component {
  render() {
    return (
      <header id='header'>
        <img src={logo} className='logo' alt='logo' />
        <span className='logo-title'>cc</span>
        <div className='nav'>
          <span className='menu'>
            <NavLink to='/home' activeClassName='active'>首页</NavLink>
          </span>
          <span className='menu'>
            <NavLink to='/cssExample' activeClassName='active'>样式用例</NavLink>
          </span>
          <span className='menu'>
            <NavLink to='/cssTool' activeClassName='active'>小工具</NavLink>
          </span>
        </div>
      </header>
    )
  }
}

export default Header
