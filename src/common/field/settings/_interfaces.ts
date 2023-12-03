import type { TypeCell } from '@common/field/settings/_settings'

interface IFieldParams {
  fieldSize: number
}

type IFiledGame = [number, TypeCell][][]

export type {
  IFiledGame,
  IFieldParams
}
