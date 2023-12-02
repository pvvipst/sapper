import CreateElement from "../create-element";
import {CLASS_LIST, EVENT_MOUSE_CLICK, TYPE_MOUSE_CLICK} from "../setting.js";
import {MINE, STYLE_CELL} from "../style.js";

class CellElement {
  _createDocument = new CreateElement()
  _params = {type: '', value: 0}

  constructor(params) {
    this._params = params
  }

  static new(params) {
    return new CellElement(params)
  }

  generate() {
    this._createDocument.create({
      tag: 'div',
      className: CLASS_LIST.FIELD_CELL,
      listener: [
        { type: 'mousedown', callback: this._eventClick.bind(this) },
        { type: 'contextmenu', callback: (event) => { event.preventDefault() } },
      ]
    })
    return this._createDocument._element
  }

  _eventClick(event) {
    if (EVENT_MOUSE_CLICK[event.button] === TYPE_MOUSE_CLICK.LEFT) this._leftClick()
    if (EVENT_MOUSE_CLICK[event.button] === TYPE_MOUSE_CLICK.RIGHT) this._rightClick()
  }

  _rightClick() {
    const element = this._createDocument._element
    element.innerHTML = MINE
  }

  _leftClick() {
    const element = this._createDocument._element
    element.style.color = STYLE_CELL[this._params.type]
    element.innerText = this._params.value
  }

  _showField() {
    const element = this._createDocument._element
    element.style.color = STYLE_CELL[this._params.type]
  }
}

export default CellElement
