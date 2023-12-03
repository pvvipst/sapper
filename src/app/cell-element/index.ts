import CreateElement from '@common/create-element'

import { TypeClassList } from '@app/options'

import { TypeMouseClick } from '@app/cell-element/settings'

import { TypeCell } from '@common/field/settings'
import MineIcon from '@assets/icons/mine.svg'
import MineRightClickIcon from '@assets/icons/right-click-mine.svg'

import type { ICellElementParams, ICellElementProps } from '@app/cell-element/settings'

/* eslint-disable @typescript-eslint/restrict-template-expressions */

class CellElement {

  public element: HTMLElement

  private _params: ICellElementParams

  constructor (params: ICellElementProps) {
    this.element = this._generate()
    this._params = { ...params, isClick: false, typeClick: undefined }
  }

  public static new (params: ICellElementProps): CellElement {
    return new CellElement(params)
  }

  private _generate (): HTMLElement {
    return new CreateElement({
      tag: 'div',
      className: [TypeClassList.CELL, TypeClassList.DEFAULT_CELL],
      listener: [
        { type: 'mousedown', callback: this._eventClick.bind(this) },
        { type: 'contextmenu', callback: (event): void => {
          event.preventDefault()
        } },
      ]
    }).element
  }

  private _eventClick (event: Event): void {
    const ev = event as MouseEvent
    if (TypeMouseClick.LEFT === ev.button) this._leftClick()
    if (TypeMouseClick.RIGHT === ev.button) this._rightClick()
  }

  private _rightClick (): void {
    if (this._params.typeClick === TypeCell.ICEBERG) {
      this.element.innerHTML = ''
      this._params.typeClick = undefined
      this.element.className = `${TypeClassList.CELL} ${TypeClassList.DEFAULT_CELL}`
    } else if (this._params.typeClick === undefined) {
      this.element.innerHTML = `<img src="${MineRightClickIcon}" alt="">`
      this.element.className = `${TypeClassList.CELL} ${TypeClassList.ACTIVE_CELL}`
      this._params.typeClick = TypeCell.ICEBERG
    }
  }

  private _leftClick (): void {
    if (this._params.typeClick === undefined) {
      if (this._params.type === TypeCell.VALUE) this.element.innerText = this._params.value.toString()
      if (this._params.type === TypeCell.MINE) this.element.innerHTML = `<img width="100%" height="100%" src="${MineIcon}" alt="">`
      this.element.className = `${TypeClassList.CELL} ${TypeClassList.ACTIVE_CELL}`
      this._params.typeClick = TypeCell.VALUE
    }
  }

}

export default CellElement
