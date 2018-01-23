import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Form, Icon, Input, Button, Checkbox } from 'antd'
import message from 'Components/message'

import * as actions from './redux'

import './style.scss'

const FormItem = Form.Item

class Login extends Component {
  static propTypes = {
    form: PropTypes.shape({
      validateFields: PropTypes.func.isRequired,
      getFieldDecorator: PropTypes.func.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
      login: PropTypes.func.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    history: PropTypes.shape({}).isRequired,
  }

  /**
   * 点击登录
   */
  handleSubmit = (e) => {
    e.preventDefault()

    const { form: { validateFields }, actions: { login }, history } = this.props

    validateFields((err, values) => {
      if (!err) {
        login(values)
          .then(() => {
            history.push('/home')
          })
          .catch((error) => {
            message.error(error)
          })
      }
    })
  }

  render() {
    const { form: { getFieldDecorator }, loading } = this.props

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
              loading={loading}
            >
              { loading ? '登录中' : '登录' }
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.login.loading,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login)))
