const input_email = document.getElementById('input-email')
const input_password = document.getElementById('input-password')

const modal_error_email = document.getElementById('modal-register-error-email')
const modal_error_password = document.getElementById('modal-register-error-password')

const btn_register = document.getElementById('btn-register')
const btn_user_exists = document.getElementById('btn-close-modal-user-exists')

const regex_password_nums = /[0-9]/g
const regex_password_letters = /[a-zA-Z]/g

btn_register.addEventListener('click', () => {
  if(!input_email.value.includes('@') || !input_email.value.includes('.com')){
    modal_error_email.style.display = 'flex'
    setTimeout(() => {
      modal_error_email.style.display = 'none'
    }, 3000)
  }
  else if(input_password.value.length < 8 || !regex_password_nums.test(input_password.value) ||
    !regex_password_letters.test(input_password.value)){
    modal_error_password.style.display = 'flex'
    setTimeout(() => {
      modal_error_password.style.display = 'none'
    }, 3000)
  }
})

btn_user_exists.addEventListener('click', () => {
  window.location.href = '/web/pages/login.html'
})