const img_profile_user = document.getElementById("img-profile-user")
const icon_previous_home = document.getElementById("icon-previous")

const modal_add_list = document.getElementById("modal-add-list")

const modal_add_task = document.getElementById("modal-add-task")
const btn_add_to_do = document.getElementById("btn-add-to-do")

const btn_close_modal_task = document.getElementById("btn-close-modal-task")

const modal_invite_people = document.getElementById("modal-invite-people")
const email_invite = document.getElementById("email-invite")
const name_invite = document.getElementById("name-invite")
const btn_invite_people_inside = document.getElementById("btn-invite-people-inside")
const btn_invite_people_outside = document.getElementById("btn-invite-people-outside")
const btn_close_modal_invite = document.getElementById("btn-close-modal-invite")

icon_previous_home.addEventListener('click', () => {
  window.location.href = '/web/pages/login.html'
})

btn_add_to_do.addEventListener('click', () => {
  if(modal_add_task.style.display === 'flex'){
    modal_add_task.style.display = 'none'  
  } else modal_add_task.style.display = 'flex'
})

btn_close_modal_task.addEventListener('click', () => {
  modal_add_task.style.display = 'none'
})

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