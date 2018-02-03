import { observable, action } from "mobx"
import Cookie from 'universal-cookie'

const cookie = new Cookie()

class Auth {

  @observable isAuthenticated = false
  @observable loginLoading = false

  constructor() {
  }

  @action login = (opts) => {
    const { username, password } = opts
    this.loginLoading = true
    
    if (username === 'lcc' && password === 'lcc') {
      this.isAuthenticated = true
      cookie.set('token', 'isAuthenticated')
    }

    this.loginLoading = false
  }

  @action signout = () => {
    this.isAuthenticated = false

    cookie.clear()
  }
	
}

const authStore = new Auth()

export default authStore