import CellElement from "../cell-element";
import CreateElement from "../create-element";
import {CLASS_LIST, random, TYPE_CELL} from "../setting.js";

const _default = {fieldSize: 5}

class Field {
  _params = _default
  _field = []
  _fieldDocument = []
  _createDocument = new CreateElement()

  constructor(params = _default) {
    this._params = params
    for (let i = 0; i < params.fieldSize; i++) {
      this._field.push(Array.from({ length: params.fieldSize }, (_, i) =>  []))
    }
  }

  run() {
    this._createField()
    this._calculateFiled()
    this._addingDocument()
  }

  _createField() {
    const countMine = random(this._params.fieldSize, this._params.fieldSize * 2)
    const mineIndex = []

    for (let i = 0; i < countMine; i++) {
      mineIndex.push(this._generateRandomMine(mineIndex))
    }

    for (let i = 0; i < this._params.fieldSize; i++) {
      for (let j = 0; j < this._params.fieldSize; j++) {
        const find = mineIndex.find((item) => {
          const [x, y] = item
          return x === j && y === i
        })
        if (find === undefined) this._field[i][j] = 0
        else this._field[i][j] = TYPE_CELL.mine
      }
    }
  }

  _generateRandomMine(field) {
    const cord = [random(0, this._params.fieldSize), random(0, this._params.fieldSize)]
    const find = field.find((item) => {
      const [x, y] = item
      return x === cord[0] && y === cord[1]
    })

    if (find === undefined) return cord
    return this._generateRandomMine(field)
  }

  _calculateFiled() {
    for (let i = 0; i < this._params.fieldSize; i++) {
      for (let j = 0; j < this._params.fieldSize; j++) {
        if (this._field[i][j] === TYPE_CELL.mine) {
          if (this._checkMineOrUndefined(i + 1, j)) this._field[i + 1][j] += 1
          if (this._checkMineOrUndefined(i - 1, j)) this._field[i - 1][j] += 1
          if (this._checkMineOrUndefined(i + 1, j + 1)) this._field[i + 1][j + 1] += 1
          if (this._checkMineOrUndefined(i - 1, j - 1)) this._field[i - 1][j - 1] += 1
          if (this._checkMineOrUndefined(i, j + 1)) this._field[i][j + 1] += 1
          if (this._checkMineOrUndefined(i, j - 1)) this._field[i][j - 1] += 1
          if (this._checkMineOrUndefined(i - 1, j + 1)) this._field[i - 1][j + 1] += 1
          if (this._checkMineOrUndefined(i + 1, j - 1)) this._field[i + 1][j - 1] += 1
        }
      }
    }
    for (let i = 0; i < this._params.fieldSize; i++) {
      for (let j = 0; j < this._params.fieldSize; j++) {
          if (this._field[i][j] === 0) this._field[i][j] = TYPE_CELL.empty
      }
    }
  }

  _checkMineOrUndefined(i, j) {
    const _check = (i) => this._field[i] === undefined
    if (i < 0 || j < 0) return false
    if (_check(i) || _check(j)) return false
    return this._field[i][j] !== TYPE_CELL.mine
  }

  _addingDocument() {
    const _doc = document.getElementById('container')

    for (const row of this._field) {
      const rowElements = this._createDocument.create({tag: 'div', className: CLASS_LIST.FIELD_ROW})
      for (const item of row) {
        rowElements.append(CellElement.new({
          type: typeof item === 'number' ? TYPE_CELL.value : item,
          value: item
        }).generate())
      }
      _doc.appendChild(rowElements)
    }
  }

}

export default Field
