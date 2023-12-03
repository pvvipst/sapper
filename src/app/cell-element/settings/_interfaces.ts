import type { TypeCell } from '@common/field/settings'

interface ICellElementParams {
  type: TypeCell
  value: number
  isClick: boolean
  typeClick: TypeCell | undefined
}

interface ICellElementProps {
  type: TypeCell
  value: number
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
