import md5 from 'md5'

import { bootstrap } from "./bootstrap"
import { chunk, drawRect } from "./helpers"

export const render = (name: string) => {
  const hash = md5(name)
  const chunks = chunk(hash, 2) as string[]
  const [r, g, b] = chunks

  const color = '#' + r + g + b
  const cells = chunks.map(chunk => parseInt(chunk, 16) % 2 === 0)
  const grid = (chunk(cells, 3) as any[]).map(([f, s, t]) => [f, s, t, s, f])

  const { ctx } = bootstrap()

  const makeCell = (x: number, y: number) => drawRect(
    ctx,
    {
      h: 50,
      w: 50,
      x,
      y,
      color
    }
  )

  grid.map((col, y) =>
    col.map((row, x) => {
      row && makeCell(x * 50, y * 50)
    })
  )
}