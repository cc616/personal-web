import React, { Component } from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import _ from 'lodash'
import { Button, Input, Select } from 'antd'
import { ChromePicker } from 'react-color'

import * as actions from './redux'

import './style.scss'

const Option = Select.Option

class FontSetting extends Component {

  static propTypes = {
    actions: PropTypes.shape({
      resettingFontStyle: PropTypes.func.isRequired,
      changeFontFamily: PropTypes.func.isRequired,
      changeFontSize: PropTypes.func.isRequired,
      changeFontLineHeight: PropTypes.func.isRequired,
      changeFontBackground: PropTypes.func.isRequired,
    }).isRequired,
    fontFamily: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    fontLineHeight: PropTypes.number.isRequired,
    fontBackground: PropTypes.shape({}).isRequired,
  }

  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  }

  // componentDidMount() {
  //   window.addEventListener('keydown', () => {
  //     console.log('s')
  //   })
  // }

  handleClick = () => {
    const { actions: { resettingFontStyle } } = this.props

    resettingFontStyle()
  }

  handleSelectChange = (value) => {
    const { actions: { changeFontFamily } } = this.props

    changeFontFamily(value)
  }
  
  handleChange = (e) => {
    const { value, name } = e.target
    const isIntegerReg = /^[1-9]{0,1}[0-9]*$/

    if (isIntegerReg.test(value) && value.length < 3) {
      this.updateValue(name, value)
    }
  }

  handleFocus = (e) => {
    const { value } = e.target

    e.target.setSelectionRange(0, value.length)

  }

  handleKeyDown = (e) => {
    let value = Number(e.target.value)
    const { name } = e.target

    if (e.keyCode === 38) {
      value += 1
    }

    if (e.keyCode === 40) {
      value -= 1
    }

    if (value >= 0 && value < 100) {
      this.updateValue(name, value)
    }
  }

  updateValue = (name, value) => {
    const { actions: { changeFontSize, changeFontLineHeight } } = this.props

    return ({
      fontSize: () => changeFontSize(Number(value)),
      lineHeight: () => changeFontLineHeight(Number(value)),
    }[name]())
  }

  handleBackgroundChange = (e) => {
    const { value } = e.target

    if (value.length < 7) {
      const hex = `#${value}`
      const { fontBackground: { rgba } } = this.props
      const options = { rgba, hex }
  
      this.updateBackground(options)
    }
  }

  handleBlur = (e) => {
    const { value } = e.target
    const hex = `#${value}`
    const { fontBackground } = this.props

    let tempHex = _.cloneDeep(fontBackground.hex).substring(1)
    const rgba = _.cloneDeep(fontBackground.rgba)

    if (tempHex.length === 3) {
      tempHex = `${tempHex[0]}${tempHex[0]}${tempHex[1]}${tempHex[1]}${tempHex[2]}${tempHex[2]}`
    }

    this.hexToRgb(hex)
      .then((rgb) => {
        if (!(rgba.r === rgb.r && rgba.b === rgb.b && rgba.g === rgb.g)) {
          rgba.r = rgb.r
          rgba.b = rgb.b
          rgba.g = rgb.g
          const options = { rgba, hex: tempHex }
  
          this.updateBackground(options)
        }
      })
      .catch(() => {
        let r = rgba.r.toString(16)
        r = r.length > 1 ? r : `${r}${r}`
        let g = rgba.g.toString(16)
        g = g.length > 1 ? g : `${g}${g}`
        let b = rgba.b.toString(16)
        b = b.length > 1 ? b : `${b}${b}`
        const color = `#${r}${g}${b}`
        const options = { rgba, hex: color }
        
        this.updateBackground(options)
      })
  }

  hexToRgb = (hex) => (
    new Promise((resolve, reject) => {
      // const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        let color = hex.substring(1).split('')
        if (color.length === 3) {
          color = [color[0], color[0], color[1], color[1], color[2], color[2]]
        }
        color = '0x' + color.join('')
        const r = (color >> 16) & 255
        const g = (color >> 8) & 255
        const b = color & 255
        const rgb = { r, g, b }
        resolve(rgb)
      } else {
        reject(hex)
      }
    })
  )

  updateBackground = (options) => {
    const { actions: { changeFontBackground } } = this.props
    
    changeFontBackground(options)
  }

  handleChoiceColor = () => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker,
    })
  }

  handleClose = () => {
    this.setState({
      displayColorPicker: false,
    })
  };

  handleColorChange = (color) => {
    const { hex, rgb } = color
    const { actions: { changeFontBackground } } = this.props

    const options = {
      rgba: rgb,
      hex,
    }

    this.updateBackground(options)
  };

  render() {
    const { displayColorPicker, color } = this.state
    const { fontFamily, fontSize, fontLineHeight, fontBackground: { rgba, hex } } = this.props

    const fontBackgroundValue = hex.substring(1)

    const backgroundStyle = {
      background: `rgba(${ rgba.r }, ${ rgba.g }, ${ rgba.b }, ${ rgba.a })`,
    }

    const fontFamilies = {
      '微软雅黑': {
        font: 'Microsoft YaHei',
        family: 'Sans-serif',
      },
      '宋体': {
        font: '宋体',
        family: 'Serif'
      },
    }

    const styles = reactCSS({
      'default': {
        fontStyle: {
          fontFamily: `'${fontFamilies[fontFamily].font}', ${fontFamilies[fontFamily].family}`,
          fontSize: `${fontSize}px`,
          lineHeight: `${fontLineHeight}px`,
          ...backgroundStyle
        },
      },
    })

    return (
      <div className='font-setting-wrapper'>
        <div className='button'>
          <Button type='primary' onClick={this.handleClick}>重置设置</Button>
        </div>
        <div className='group'>
          <div className='item'>
            <label className='label'>字体</label>
            <Select
              defaultValue='微软雅黑'
              className='font-select'
              onChange={this.handleSelectChange}
            >
              <Option value='微软雅黑'>微软雅黑</Option>
              <Option value='宋体'>宋体</Option>
            </Select>
          </div>
          <div className='item'>
            <label className='label'>字号</label>
            <span className='font-input'>
              <Input
                className='input'
                name='fontSize'
                value={fontSize}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onKeyDown={this.handleKeyDown}
                addonAfter='px'
              />
            </span>
          </div>
          <div className='item'>
            <label className='label'>行高</label>
            <span className='font-input'>
              <Input
                className='input'
                name='lineHeight'
                value={fontLineHeight}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onKeyDown={this.handleKeyDown}
                addonAfter='px'
              />
            </span>
          </div>
        </div>
        <div className='color-group'>
          <label className='label'>背景色</label>
          <span className='color-input'>
            <Input
              addonBefore='#'
              value={fontBackgroundValue}
              onChange={this.handleBackgroundChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </span>
          <span
            style={backgroundStyle}
            className='color-select'
            onClick={this.handleChoiceColor}
          ></span>
          {
            displayColorPicker
              ?
              <div className='color-picker'>
                <div className='color-picker-cover' onClick={this.handleClose} />
                <ChromePicker
                  color={rgba}
                  onChange={this.handleColorChange}
                />
              </div>
              : null
          }
        </div>
        <div className='title'>效果</div>
        <div style={styles.fontStyle}>
          当前字体是：{fontFamily}，字体大小为：{fontSize}px，行高为：{fontLineHeight}px。
        </div>
      </div>
    )
  }
}

export default FontSetting
