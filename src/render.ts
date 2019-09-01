import md5 from 'md5'

import { bootstrap } from "./bootstrap"
import { chunk, drawRect } from "./helpers"

const repeatArray = <T>(arr: T[], n: number) => {
  let newArray = [...arr]

  for (let i = 0; i <= n; i++) newArray = [...newArray, ...arr]

  return newArray
}


const width = 250

export const render = (name: string, cols = 5) => {
  if (cols > 50) return

  const cellWidth = width / cols
  const isEven = cols % 2 === 0

  const hash = md5(name)
  const bytes = repeatArray(chunk(hash, 2), cols * cols) as string[]
  const [r, g, b] = bytes


  const color = '#' + r + g + b
  const cells = bytes.map(byte => parseInt(byte, 16) % 2 === 0)
  const grid = (chunk(cells, Math.floor(cols / 2) + Number(!isEven)) as any[][])
    .map(chunk => {
      const reverse = [...chunk].reverse()
      const [, ...notEvenReverse] = reverse

      return isEven
        ? [...chunk, ...reverse]
        : [...chunk, ...notEvenReverse]
    }) as unknown as boolean[][]

  const { ctx } = bootstrap(width, width)

  const makeCell = (x: number, y: number) => drawRect(
    ctx,
    {
      h: cellWidth,
      w: cellWidth,
      x,
      y,
      color
    }
  )

  grid.map((col, y) =>
    col.map((row, x) => {
      row && makeCell(x * cellWidth, y * cellWidth)
    })
  )
}