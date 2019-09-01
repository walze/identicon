import md5 from 'md5'

import { bootstrap } from "./bootstrap"
import { chunk, drawRect } from "./helpers"

const repeatArray = <T>(arr: T[], n: number) => {
  let newArray = [...arr]

  for (let i = 0; i <= n; i++) newArray = [...newArray, ...arr]

  return newArray
}


const width = 250
const cols = 6
const cellWidth = width / cols
const isEven = cols % 2 === 0

export const render = (name: string) => {
  const hash = md5(name)
  const bytes = repeatArray(chunk(hash, 2), (Math.floor(cols / 2) + 1) / 3) as string[]
  const [r, g, b] = bytes


  const color = '#' + r + g + b
  const cells = bytes.map(byte => parseInt(byte, 16) % 2 === 0)
  const grid = (chunk(cells, Math.floor(cols / 2) + 1) as any[][])
    .map(chunk => {
      const reverse = [...chunk].reverse()
      const [, ...notEvenReverse] = reverse

      return isEven
        ? [...chunk, ...reverse]
        : [...chunk, ...notEvenReverse]
    }) as unknown as boolean[][]

  console.log(bytes)
  console.log(grid)


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