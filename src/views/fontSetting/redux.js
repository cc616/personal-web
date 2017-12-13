const CHANGE_FONT_FAMILY = 'CHANGE_FONT_FAMILY'
const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE'
const CHANGE_FONT_LINE_HEIGHT = 'CHANGE_FONT_LINE_HEIGHT'
const CHANGE_FONT_BACKGROUND = 'CHANGE_FONT_BACKGROUND'
const RESETTING_FONT_STYLE = 'RESETTING_FONT_STYLE'

export const resettingFontStyle = () => dispatch => (
  dispatch({
    type: RESETTING_FONT_STYLE,
  })
)

export const changeFontFamily = fontFamily => dispatch => (
  dispatch({
    type: CHANGE_FONT_FAMILY,
    fontFamily,
  })
)

export const changeFontSize = fontSize => dispatch => (
  dispatch({
    type: CHANGE_FONT_SIZE,
    fontSize,
  })
)

export const changeFontLineHeight = fontLineHeight => dispatch => (
  dispatch({
    type: CHANGE_FONT_LINE_HEIGHT,
    fontLineHeight,
  })
)

export const changeFontBackground = fontBackground => dispatch => (
  dispatch({
    type: CHANGE_FONT_BACKGROUND,
    fontBackground,
  })
)

const initialState = {
  fontFamily: '微软雅黑',
  fontSize: 12,
  fontLineHeight: 18,
  fontBackground: {
    rgba: {
      r: 111,
      g: 220,
      b: 214,
      a: 1,
    },
    hex: '#6fdcd6',
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESETTING_FONT_STYLE:
      return {
        ...initialState,
      }
    case CHANGE_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily,
      }
    case CHANGE_FONT_SIZE:
      return {
        ...state,
        fontSize: action.fontSize,
      }
    case CHANGE_FONT_LINE_HEIGHT:
      return {
        ...state,
        fontLineHeight: action.fontLineHeight,
      }
    case CHANGE_FONT_BACKGROUND:
      return {
        ...state,
        fontBackground: action.fontBackground,
      }
    default:
      return state
  }
}