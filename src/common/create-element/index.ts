import type { ICreateElementParams } from '@common/create-element/settings'

class CreateElement<A = HTMLElement> {

  public element: HTMLElement

  private readonly _params: ICreateElementParams<A>

  constructor (params: ICreateElementParams<A>) {
    this._params = params
    this.element = document.createElement(params.tag)
    this.element.className = params.className.join(' ')
    this._addListener()
    this._addAttributes()
    if ('innerHTML' in params) this.element.innerHTML = params.innerHTML!
  }

  private _addListener (): void {
    if ('listener' in this._params) {
      this._params.listener?.forEach(({ type, callback }) => {
        this.element.addEventListener(type, callback)
      })
    }
  }

  private _addAttributes (): void {
    if ('attributes' in this._params) {
      const keys = Object.entries(this._params.attributes!) as [string, string][]

      for (const [key, value] of keys) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        this.element[key] = value
      }
    }
  }

}

export default CreateElement
