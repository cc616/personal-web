import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { Form, Icon, Input, Button, Checkbox } from 'antd'

import './style.scss'

const FormItem = Form.Item

@inject('authStore')
@observer
class Login extends Component {
  static propTypes = {
    form: PropTypes.shape({
      validateFields: PropTypes.func.isRequired,
      getFieldDecorator: PropTypes.func.isRequired,
    }).isRequired,
    authStore: PropTypes.shape({
      login: PropTypes.func.isRequired,
      loginLoading: PropTypes.bool.isRequired,
      isAuthenticated: PropTypes.bool.isRequired,
    }),
  }

  state = {
    isAuthenticated: false,
  }

  /**
   * 点击登录
   */
  handleSubmit = (e) => {
    e.preventDefault()

    const { form: { validateFields }, authStore: { login } } = this.props

    validateFields((err, values) => {
      if (!err) {
        login(values)
        this.setState({ isAuthenticated: true })
      }
    })
  }

  render() {
    const {
      form: { getFieldDecorator },
      authStore: { loginLoading },
    } = this.props
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    
    if (this.state.isAuthenticated) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div className='login-wrapper'>
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{
                required: true,
                message: '请输入用户名',
              }],
            })(
              <Input prefix={<Icon type='user' />} placeholder='请输入用户名' />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input prefix={<Icon type='lock' />} type='password' placeholder='请输入密码' />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>,
            )}
          </FormItem>
          <FormItem>
            <Button
              type='primary'
              htmlType='submit'
              className='login-button'
              loading={loginLoading}
            >
              { loginLoading ? '登录中' : '登录' }
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Login)
