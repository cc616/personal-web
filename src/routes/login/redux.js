import Cookies from 'universal-cookie'

const cookies = new Cookies()

const LOAD_LOGING_PENDING = 'LOAD_LOGING_PENDING'
const LOAD_LOGING_SUCCESS = 'LOAD_LOGING_SUCCESS'
const LOAD_LOGING_FAIL = 'LOAD_LOGING_FAIL'

export const login = opts => dispatch => (
  new Promise((resolve, reject) => {
    dispatch({ type: LOAD_LOGING_PENDING })
    const { username, password } = opts

    if (username === 'lcc' && password === 'lcc') {
      dispatch({ type: LOAD_LOGING_SUCCESS })
      cookies.set('token', username)
      resolve()
    } else {
      dispatch({ type: LOAD_LOGING_FAIL })
      reject()
    }
  })
)

const initialState = {
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOGING_PENDING:
      return {
        ...state,
        loading: true,
      }
    case LOAD_LOGING_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case LOAD_LOGING_FAIL:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
