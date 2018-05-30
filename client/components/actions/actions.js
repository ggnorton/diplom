let count = 0
export const buttonClick = text => ({
  type: 'BUTTON_CLICK',
  count: ++count,
  text
})