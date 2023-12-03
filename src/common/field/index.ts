import { random, TypeCell } from '@common/field/settings'

import CreateElement from '@common/create-element'
import { TypeClassList } from '@app/options'
import CellElement from '@app/cell-element'

import type { IFieldParams, IFiledGame } from '@common/field/settings'

const _default = { fieldSize: 5 }

class Field {

  private _params: IFieldParams

  private _field: IFiledGame = []

  constructor (params = _default) {
    this._params = params
    for (let i = 0; i < params.fieldSize; i++) {
      const arr: [number, TypeCell][] = []
      for (let j = 0; j < params.fieldSize; j++) {
        arr.push([0, TypeCell.EMPTY])
      }
      this._field.push(arr)
    }
  }

  public run (): void {
    this._createField()
    this._calculateFiled()
    this._addingDocument()
  }

  private _createField (): void {
    const countMine = random(this._params.fieldSize, this._params.fieldSize * 2)
    const mineIndex: [number, number][] = []

    for (let i = 0; i < countMine; i++) {
      mineIndex.push(this._generateRandomMine(mineIndex))
    }

    for (let i = 0; i < this._params.fieldSize; i++) {
      for (let j = 0; j < this._params.fieldSize; j++) {
        const find = mineIndex.find((item) => {
          const [x, y] = item
          return x === j && y === i
        })
        if (find === undefined) this._field[i][j] = [0, TypeCell.EMPTY]
        else this._field[i][j] = [0, TypeCell.MINE]
      }
    }
  }

  private _generateRandomMine (field: [number, number][]): [number, number] {
    const cord: [number, number] = [random(0, this._params.fieldSize), random(0, this._params.fieldSize)]
    const find = field.find((item) => {
      const [x, y] = item
      return x === cord[0] && y === cord[1]
    })
    return find === undefined ? cord : this._generateRandomMine(field)
  }

  private _calculateFiled (): void {
    for (let i = 0; i < this._params.fieldSize; i++) {
      for (let j = 0; j < this._params.fieldSize; j++) {
        if (this._field[i][j][1] === TypeCell.MINE) {
          this._checkMineOrUndefined(i + 1, j)
          this._checkMineOrUndefined(i - 1, j)
          this._checkMineOrUndefined(i + 1, j + 1)
          this._checkMineOrUndefined(i - 1, j - 1)
          this._checkMineOrUndefined(i, j + 1)
          this._checkMineOrUndefined(i, j - 1)
          this._checkMineOrUndefined(i - 1, j + 1)
          this._checkMineOrUndefined(i + 1, j - 1)
        }
      }
    }
    for (let i = 0; i < this._params.fieldSize; i++) {
      for (let j = 0; j < this._params.fieldSize; j++) {
        if (this._field[i][j][0] === 0 && this._field[i][j][1] !== TypeCell.MINE)
          this._field[i][j] = [0, TypeCell.EMPTY]
      }
    }
  }

  private _checkMineOrUndefined (i: number, j: number): void {
    const _check = (q: number): boolean => this._field[q] === undefined
    if (i < 0 || j < 0) return
    if (_check(i) || _check(j)) return
    if (this._field[i][j][1] !== TypeCell.MINE) this._field[i][j] = [this._field[i][j][0] += 1, TypeCell.VALUE]
  }

  private _addingDocument (): void {
    const _doc = document.getElementById('container')!

    for (const row of this._field) {
      const rowElements = new CreateElement({ tag: 'div', className: [TypeClassList.ROW]}).element
      for (const item of row) {
        const [value, type] = item
        rowElements.append(CellElement.new({ type, value }).element)
      }
      _doc.appendChild(rowElements)
    }
  }

}

export default Field
