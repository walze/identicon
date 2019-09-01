export const chunk = <T>(array: T[] | string, len: number) => {
  const chunks = []
  const n = array.length

  let i = 0

  while (i < n) {
    chunks.push(array.slice(i, i += len))
  }

  return chunks
}

export const drawRect = (
  ctx: CanvasRenderingContext2D,
  pos: {
    x: number,
    y: number,
    w: number,
    h: number,
    color: string
  }
) => {
  const { h, w, x, y, color } = pos

  ctx.fillStyle = color
  ctx.fillRect(x, y, w, h)

  return ctx
}