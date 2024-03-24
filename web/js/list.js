const img_profile_user = document.getElementById("img-profile-user")
const icon_previous_home = document.getElementById("icon-previous")

const modal_add_list = document.getElementById("modal-add-list")

const btn_open_modal = document.getElementById("btn-open-modal")
const btn_close_modal = document.getElementById("btn-close-modal")
const btn_save_list = document.getElementById("btn-add-new-list")
const start_new_list_text = document.getElementById("start-new-list-text")

const title_list = document.getElementById("title-list")
const member_list = document.getElementById("member-list")
const description_list = document.getElementById("description-list")

const modal_add_task = document.getElementById("modal-add-task")
const btn_add_to_do = document.getElementById("btn-add-to-do")

const btn_close_modal_task = document.getElementById("btn-close-modal-task")

const modal_invite_people = document.getElementById("modal-invite-people")
const email_invite = document.getElementById("email-invite")
const name_invite = document.getElementById("name-invite")
const btn_invite_people_inside = document.getElementById("btn-invite-people-inside")
const btn_invite_people_outside = document.getElementById("btn-invite-people-outside")
const btn_close_modal_invite = document.getElementById("btn-close-modal-invite")

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

icon_previous_home.addEventListener('click', () => {
  window.location.href = '/web/pages/login.html'
})

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

btn_add_to_do.addEventListener('click', () => {
  if(modal_add_task.style.display === 'flex'){
    modal_add_task.style.display = 'none'  
  } else modal_add_task.style.display = 'flex'
})

btn_close_modal_task.addEventListener('click', () => {
  modal_add_task.style.display = 'none'
})

/*
btn_add_new_task.addEventListener('click', () => {
  if(!title_task.value || !member_task.value || !description_task.value) return
  const new_task = {
    title: title_task.value,
    member: member_task.value,
    description: description_task
  } 
  modal_add_task.style.display = 'none'
})*/

btn_invite_people_inside.addEventListener('click', () => {
  //if(!email_invite.value || !name_invite.value) return
  modal_invite_people.style.display = 'none'
})

btn_invite_people_outside.addEventListener('click', () => {
  if(modal_invite_people.style.display === 'flex'){
    modal_invite_people.style.display = 'none'
  } else modal_invite_people.style.display = 'flex'
})

btn_close_modal_invite.addEventListener('click', () => {
  modal_invite_people.style.display = 'none'
})

const defineValues = () => {
  lists.map((list) => {
    title_list.innerHTML = list.title
  })
  const urlPhoto = localStorage.getItem('@urlImg_user')
  img_profile_user.src = urlPhoto
}

window.onload = defineValues()