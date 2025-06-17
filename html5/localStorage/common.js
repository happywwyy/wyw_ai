const addItems = document.querySelection('.add-items') // form
const itemsList = DocumentFragment.querySelector('.plates') // 列表

function addItem(e) {
  e.preventDefault()

}

addItems.addEventListener('submit', addItem)