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

  public params: ICellElementParams

  constructor (params: ICellElementProps) {
    this.element = this._generate()
    this.params = { ...params, isClick: false, typeClick: undefined }
  }

  public static new (params: ICellElementProps): CellElement {
    return new CellElement(params)
  }

  public leftClick (): void {
    if (this.params.typeClick === undefined) {
      if (this.params.type === TypeCell.VALUE) this.element.innerText = this.params.value.toString()
      if (this.params.type === TypeCell.MINE) this.element.innerHTML = `<img width="100%" height="100%" src="${MineIcon}" alt="">`
      this.element.className = `${TypeClassList.CELL} ${TypeClassList.ACTIVE_CELL}`
      this.params.typeClick = TypeCell.VALUE
      if (this.params.type === TypeCell.EMPTY) this.params.callback(this.params.y, this.params.x)
    }
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
    if (TypeMouseClick.LEFT === ev.button) this.leftClick()
    if (TypeMouseClick.RIGHT === ev.button) this._rightClick()
  }

  private _rightClick (): void {
    if (this.params.typeClick === TypeCell.ICEBERG) {
      this.element.innerHTML = ''
      this.params.typeClick = undefined
      this.element.className = `${TypeClassList.CELL} ${TypeClassList.DEFAULT_CELL}`
    } else if (this.params.typeClick === undefined) {
      this.element.innerHTML = `<img src="${MineRightClickIcon}" alt="">`
      this.element.className = `${TypeClassList.CELL} ${TypeClassList.ACTIVE_CELL}`
      this.params.typeClick = TypeCell.ICEBERG
    }
  }

}

export default CellElement
