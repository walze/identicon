const $canvas = document.querySelector('canvas') as HTMLCanvasElement

export const bootstrap = (w = 250, h = 250) => {
  $canvas.width = w
  $canvas.height = h

  const ctx = $canvas.getContext("2d")
  if (!ctx) {
    alert('browser not supported')
    throw new Error('browser not supported')
  }

  return { $canvas, ctx }
}
