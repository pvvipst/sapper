import type { TypeClassList } from '@app/options'

interface IListener {
  type: keyof HTMLElementEventMap
  callback<K extends keyof HTMLElementEventMap>(event: HTMLElementEventMap[K]): void
}

interface ICreateElementParams<A = HTMLElement> {
  tag: keyof HTMLElementTagNameMap
  className: TypeClassList[]
  listener?: IListener[]
  innerHTML?: string
  attributes?: Partial<A>
}

export type {
  ICreateElementParams
}
