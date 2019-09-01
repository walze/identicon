import { render } from "./render";

const $input = document.querySelector('input') as HTMLInputElement

render('')

$input.addEventListener('input', (e) => {
  const { value } = e.target as HTMLInputElement

  render(value)
})

