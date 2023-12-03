import type CellElement from '@app/cell-element'

import type { TypeCell } from '@common/field/settings/_settings'

interface IFieldParams {
  fieldSize: number
  complexity: number
}

type IFiledGame = [number, TypeCell][][]
type IDocFieldElement = CellElement[][]

export type {
  IFiledGame,
  IDocFieldElement,
  IFieldParams
}
