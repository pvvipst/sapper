import Field from '@common/field'

const _form = document.getElementById('start-window')
const _container = document.getElementById('container')

/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unsafe-member-access */

_form?.addEventListener('submit', (event) => {
  console.log(event)
  event.preventDefault()
  Field.new({
    // @ts-expect-error
    fieldSize: Number(event.target[1].value) as unknown as string,
    // @ts-expect-error
    complexity: Number(event.target[0].value) as unknown as string,
  })

  _form.style.display = 'none'
  // @ts-expect-error
  _container.style.display = 'flex'
})
