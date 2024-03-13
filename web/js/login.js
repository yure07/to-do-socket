const input_email = document.getElementById('input-email')
const input_password = document.getElementById('input-password')
const btn_login = document.getElementById('btn-login')

const modal_success = document.getElementById('modal-login-success')
const modal_error = document.getElementById('modal-login-error')
const navigate_to_signup = document.getElementById('text-no-account')

btn_login.addEventListener('click', () => {
  if(!input_email.value || !input_password.value) {
    modal_error.style.display = 'flex'
    setTimeout(() => {
      modal_error.style.display = 'none'
    }, 3000)
  } 
  else if(input_email.value && input_password.value){
    modal_success.style.display = 'flex'
    setTimeout(() => {
      modal_success.style.display = 'none'
    }, 3000)
  }
})

navigate_to_signup.addEventListener('click', () => {
  window.location.href = '/web/pages/register.html'
})