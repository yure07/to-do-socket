const modal_add_list = document.getElementById("modal-add-list")
const btn_open_modal = document.getElementById("btn-open-modal")
const btn_close_modal = document.getElementById("btn-close-modal")
const start_new_list_text = document.getElementById("start-new-list-text")


btn_open_modal.addEventListener('click', () => {
  modal_add_list.style.display = 'flex'
  start_new_list_text.style.display = 'none'
})

btn_close_modal.addEventListener('click', () => {
  modal_add_list.style.display = 'none'
  start_new_list_text.style.display = 'flex'
})

start_new_list_text.addEventListener('click', () => {
  modal_add_list.style.display = 'flex'
  start_new_list_text.style.display = 'none'
})
