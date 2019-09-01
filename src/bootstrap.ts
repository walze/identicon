let canvas: HTMLCanvasElement

export const bootstrap = (w = 250, h = 250) => {
  const $canvas = canvas || document.createElement('canvas')

  $canvas.width = w
  $canvas.height = h

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
