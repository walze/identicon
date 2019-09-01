import { render } from "./render";

const $input = document.querySelector('#input') as HTMLInputElement
const $cols = document.querySelector('#cols') as HTMLInputElement


let name = ''
let cols = 5

$cols.addEventListener('input', (e) => {
  const { value } = e.target as HTMLInputElement

  cols = Math.max(1, Number(value)) || 1
  render(name, cols)
})

$input.addEventListener('input', (e) => {
  const { value } = e.target as HTMLInputElement

  name = value
  render(value, cols)
})

render(name)
