import type { IFieldParams } from '@common/field/settings/_interfaces'

enum TypeCell {
  MINE = 'mine',
  EMPTY = 'empty',
  VALUE = 'value',
  ICEBERG = 'iceberg'
}

const CALC_COORDINATE = [[1, 0], [-1, 0], [1, 1], [-1, -1], [0, 1], [0, -1], [-1, 1], [1, -1]]

const random = (min: number, max: number): number => {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

const complexity = (params: IFieldParams): number => {
  return random(params.fieldSize * Math.floor(params.complexity / 2), params.fieldSize * params.complexity)
}

export { TypeCell, CALC_COORDINATE, random, complexity }
