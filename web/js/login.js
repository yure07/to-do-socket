const input_email = document.getElementById('input-email')
const input_password = document.getElementById('input-password')
const btn_login = document.getElementById('btn-login')

/* const signin_google = document.getElementById("signin-google") */

const modal_success = document.getElementById('modal-login-success')
const modal_error = document.getElementById('modal-login-error')

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
      window.location.href = '/web/pages/list.html'
    }, 3000)
  }
})

/* signin_google.addEventListener('click', async () => {
  const provider = await new firebase.auth.GoogleAuthProvider()
  return firebase.auth.signInWithPopup(firebaseConnection.auth, provider)
}) */