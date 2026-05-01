// elementos do DOM para manipulação do formulário de login e registro
const btnSignIn = document.querySelector('.btn-sign-in');
const btnSignUp = document.querySelector('.btn-sign-up');
const mainForm = document.querySelector('.main-form')

btnSignIn.addEventListener('click', ()=> {
    btnSignIn.classList.add('active');
    btnSignUp.classList.remove('active');
    mainForm.classList.remove('main-active')

});

btnSignUp.addEventListener('click', ()=>{
    btnSignUp.classList.add('active');
    btnSignIn.classList.remove('active');
    mainForm.classList.add('main-active')
});

// elementos do DOM para manipulação do ícone de olho para mostrar/ocultar senha
const showPassLogin = document.getElementById('icon-eye-login')
const inputPassLogin = document.getElementById('password-login')


showPassLogin.addEventListener('click' , ()=>{
    if(inputPassLogin.type === 'password'){
        inputPassLogin.setAttribute('type' , 'text')
        showPassLogin.classList.replace('bi-eye' , 'bi-eye-slash')
    }else{
        inputPassLogin.setAttribute('type' , 'password')
        showPassLogin.classList.replace('bi-eye-slash' , 'bi-eye')
    }
})

// elementos do DOM para manipulação do ícone de olho para mostrar/ocultar senha no formulário de registro
const showPassRegistration = document.getElementById('icon-eye-registration')
const inputPassRegistration = document.getElementById('password-registration')

showPassRegistration.addEventListener('click' , ()=>{
    if(inputPassRegistration.type === 'password'){
        inputPassRegistration.setAttribute('type' , 'text')
        showPassRegistration.classList.replace('bi-eye' , 'bi-eye-slash')
    }else{
        inputPassRegistration.setAttribute('type' , 'password')
        showPassRegistration.classList.replace('bi-eye-slash' , 'bi-eye')
    }
})