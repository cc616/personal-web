import React, { Component } from 'react'
import { Button } from 'antd'

import $ from 'jquery'

class Captcha extends Component {

  state = {
    url: '',
  }

  handleClick = () => {
    $.ajax({
      url: 'http://192.168.110.104:8033/services/captcha/generate',
      type: 'GET',
      success: data =>  {
        console.log(data)
        const b64encoded = btoa(String.fromCharCode.apply(null, data.buf.data))
        const datajpg = `data:image/jpg;base64,${b64encoded}`
        
        this.setState({
          url: datajpg,
        })
      },
      error: function(err) {
        console.log(err)
      }
    })
  }

  render() {
    const { url } = this.state

    return (
      <div className='captcha-wrapper'>
        <Button onClick={this.handleClick}>获取验证码</Button>
        <img src={url} />
      </div>
    )
  }
}

export default Captcha
