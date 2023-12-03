import type { TypeCell } from '@common/field/settings'

interface ICellElementProps {
  x: number
  y: number
  type: TypeCell
  value: number
  callback(i: number, j: number): void
}

interface ICellElementParams extends ICellElementProps {
  isClick: boolean
  typeClick: TypeCell | undefined
}

enum TypeMouseClick {
  LEFT = 0,
  RIGHT = 2
}

export type {
  ICellElementParams,
  ICellElementProps
}

export { TypeMouseClick }
