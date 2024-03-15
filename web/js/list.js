const modal_add_list = document.getElementById("modal-add-list")
const btn_open_modal = document.getElementById("btn-open-modal")
const btn_close_modal = document.getElementById("btn-close-modal")
const btn_save_list = document.getElementById("btn-add-new-list")
const start_new_list_text = document.getElementById("start-new-list-text")

const title_list = document.getElementById("title-list")
const member_list = document.getElementById("member-list")
const description_list = document.getElementById("description-list")

const title_task = document.getElementById("title_task")
const member_task = document.getElementById("member_task")
const description_task = document.getElementById("description_task")

const modal_add_task = document.getElementById("modal-add-task")
const btn_add_to_do = document.getElementById("btn-add-to-do")
const btn_add_new_task = document.getElementById("add-new-task")
const btn_close_modal_task = document.getElementById("btn-close-modal-task")


const lists = [
  {
    title: 'Estudos',
    member: 'Yure',
    description: 'Próximos tópicos a estudar na programação'
  }
]

const tasks = [
  {

  }
]

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

btn_save_list.addEventListener('click', () => {
  //if(!title_list.value || !member_list.value || !description_list.value) return
  modal_add_list.style.display = 'none'
})

btn_add_to_do.addEventListener('click', () =>{
  modal_add_task.style.display = 'flex'
})

btn_close_modal_task.addEventListener('click', () => {
  modal_add_task.style.display = 'none'
})

btn_add_new_task.addEventListener('click', () => {
  /* if(!title_task.value || !member_task.value || !description_task.value) return
  const new_task = {
    title: title_task.value,
    member: member_task.value,
    description: description_task
  } */
  modal_add_task.style.display = 'none'
})

const defineValues = () => {
  lists.map((list) => {
    title_list.innerHTML = list.title
  })
}

window.onload = defineValues()