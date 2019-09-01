let canvas: HTMLCanvasElement

export const bootstrap = () => {
  const $canvas = canvas || document.createElement('canvas')

  $canvas.width = 250
  $canvas.height = 250

  if (!canvas) {
    canvas = $canvas
    document.body.appendChild($canvas)
  }


  const ctx = $canvas.getContext("2d")
  if (!ctx) {
    alert('browser not supported')
    throw new Error('browser not supported')
  }

  return { $canvas, ctx }
}
