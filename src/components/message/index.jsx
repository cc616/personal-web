import { message as antMessage } from 'antd'

const errorMsg = (message = '未知错误') => {
  let msg = message
  if (msg.trim() === '') {
    msg = '未知错误'
  }
  antMessage.error(msg)
}

const successMsg = (message = '成功') => {
  if (message.trim() === '') {
    return
  }
  antMessage.success(message)
}

const message = {
  error: errorMsg,
  success: successMsg,
}

export default message
