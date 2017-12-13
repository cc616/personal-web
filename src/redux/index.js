import { combineReducers } from 'redux'
import login from 'Views/login/redux'
import fontSetting from 'Views/fontSetting/redux'

export default combineReducers({
  login,
  fontSetting,
})