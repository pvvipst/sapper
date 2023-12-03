enum TypeCell {
  MINE = 'mine',
  EMPTY = 'empty',
  VALUE = 'value',
  ICEBERG = 'iceberg'
}

const random = (min: number, max: number): number => {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

export { TypeCell, random }
