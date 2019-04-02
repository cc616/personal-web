import { observable, action } from "mobx"

class FontSettingStore {
  @observable fontFamily = '微软雅黑'
  @observable fontSize = 12
  @observable fontLineHeight = 18
  @observable fontBackground = {
    rgba: {
      r: 111,
      g: 220,
      b: 214,
      a: 1,
    },
    hex: '#6fdcd6',
  }

  constructor() {
  }

  @action resettingFontStyle = () => {
    this.fontFamily = '微软雅黑'
    this.fontSize = 12
    this.fontLineHeight = 18
    this.fontBackground = {
      rgba: {
        r: 111,
        g: 220,
        b: 214,
        a: 1,
      },
      hex: '#6fdcd6',
    }
  }

  @action changeFontFamily = (fontFamily) => {
    this.fontFamily = fontFamily
  }

  @action changeFontSize = (fontSize) => {
    this.fontSize = fontSize
  }

  @action changeFontLineHeight = (fontLineHeight) => {
    this.fontLineHeight = fontLineHeight
  }

  @action changeFontBackground = (fontBackground) => {
    this.fontBackground = fontBackground
  }
	
}

export default new FontSettingStore()