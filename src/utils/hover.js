const hoverPosition = ($obj, event) => {
  let x0, y0, x1, y1, x4, y4
  let k  // 斜率
  let position
  const rectObject = $obj.getBoundingClientRect()
  const { left, top, right, bottom, width, height } = rectObject
  x1 = left
  y1 = -top
  x4 = right
  y4 = -bottom
  x0 = left + width / 2
  y0 = -(top + height / 2)
  
  // 矩形太小不考虑
  if (Math.abs(x4 - x1) < 0.0001) {
    return
  }
  
  k = (y4 - y1) / (x4 - x1)

  const x = event.clientX
  const y = -event.clientY
  
  const nowK = (y - y0) / (x - x0)
  
  if (nowK >= k && nowK <= -k) {
    position = x > x0 ? 'RIGHT' : 'LEFT'
  } else {
    position = y > y0 ? 'TOP' : 'BOTTOM'
  }
  
  return position
}

export default hoverPosition