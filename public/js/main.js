const FIELDS = {
  complexity: document.getElementById('form_element-input_complexity'),
  fieldSize: document.getElementById('form_element-input_field-size')
}

FIELDS.complexity.addEventListener('input', (event) => {
  const count = document.getElementById('form_element-count_complexity')
  count.innerText = event.target.value
})

FIELDS.fieldSize.addEventListener('input', (event) => {
  const count = document.getElementById('form_element-count_field-size')
  count.innerText = event.target.value
})
