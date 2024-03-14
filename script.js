const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const checkboxPass = document.querySelector('.checkbox-pass');
const passwordInput = document.querySelector('.password');
const loginTitle = document.querySelector('.loginTitle-text');
const userEmail = document.querySelector('.user-email');
const emailInput = document.querySelector('.email');

//Avanzar al clickear Siguiente
btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-pass');
    setTimeout(() => passwordInput.focus(), 500);
    loginTitle.innerHTML = 'Bienvenido';
    userEmail.innerHTML = emailInput.value;
};

//Retroceder al clickear Atrás
btnBack.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.remove('active-pass')
    loginTitle.innerHTML = 'Inicia sesión';
    userEmail.innerHTML = 'Por favor inicia sesión para usar la plataforma';
    emailInput.focus()
};

//Mostrar contraseña checkbox
checkboxPass.onclick = () => {
    if(checkboxPass.checked) {
        passwordInput.type = 'text';
    }else{
        passwordInput.type = 'password';    
    }
};