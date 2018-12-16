import React, { Component } from 'react'
import { Icon, Input } from 'antd'

import logo from './logo.svg'
import './header.scss'

class Header extends Component {
  render() {
    return (
      <header className='header-wrapper'>
        <div>
          <img src={logo} className='logo' alt='logo' />
          <span className='logo-title'>cc</span>
        </div>
        <div className='toolbar'>
          <div>
            <Input />
            <Icon type='search' />
          </div>
          <div>about</div>
        </div>
      </header>
    )
  }
}

export default Header
