//Pagina general
const pageBox = document.querySelector('.page-box');

//Elementos del html:
    //Texto del titulo general
    const Title = document.querySelector('.Title-text');
    //Texto del correo para cambiar mediante interacción
    const Subtitle = document.querySelector('.Subtitle-text');


    //Variable que captura el input para ingresar el corro para iniciar sesión
    const InputEmail = document.querySelector('.correo-ingresar');
        //----------------------Botón para desplegar la creación de cuenta
        const btnCrearCuenta = document.querySelector('.btn-crear-cuenta');
        //----------------------Botón Next para ir a la contraseña
        const btnNext = document.querySelector('.btn-next');


    //Variable que captura el input para ingresar la contraseña para iniciar sesión
    const InputPassword = document.querySelector('.contraseña-ingresar');
        //----------------------Botón Back para retroceder de la contraseña hacia el correo
        const btnBack = document.querySelector('.btn-back');
    //Checkbox para enseñar contraseña
    const checkboxPass = document.querySelector('.checkbox-contraseña');
        //----------------------Botón para dirigirse a recuperar la contraseña
        const btnOlvideContraseña = document.querySelector('.btn-olvide-contraseña');
        //----------------------Botón Back para iniciar sesión
        const btnIniciarSesion = document.querySelector('.btn-iniciar-sesion');
    

    const InputNombreRegistrar = document.querySelector('.nombre-registrar');
    const InputEmailRegistrar = document.querySelector('.email-registrar');
    const InputContraseñaRegistrar = document.querySelector('.contraseña-registrar');
    const InputContraseñaRepetirRegistrar = document.querySelector('.contraseña-repetir-registrar');
        const btnBackRegistrar = document.querySelector('.btn-back-registrar');
        const btnRegistrar = document.querySelector('.btn-registrar');


    const InputEmailRecuperarContraseña = document.querySelector('.correo-recuperar-contraseña');
        const btnBackRecuperarContraseña = document.querySelector('.btn-back-recuperar-contraseña');
        const btnRecuperarContraseña = document.querySelector('.btn-recuperar-contraseña');
//

//Cambio de modulo
    //Avanzar a la pagina para registrar
    btnCrearCuenta.onclick = (e)=>{
        e.preventDefault();
        pageBox.classList.add('active-regi');
        setTimeout(() => InputNombreRegistrar.focus(), 500);
        Title.innerHTML='Registrate';
        Subtitle.innerHTML='¿No tienes una cuenta?';
    }
    //Retroceder a la pagina de inicio al clickear Regresar
    btnBackRegistrar.onclick = (e) => {
        e.preventDefault();
        pageBox.classList.remove('active-regi')
        Title.innerHTML = 'Inicia sesión';
        Subtitle.innerHTML = 'Por favor inicia sesión para usar la plataforma';
        InputEmail.focus()
    };
    //Avanzar al clickear Siguiente
    btnNext.onclick = (e) => {
        e.preventDefault();
        pageBox.classList.add('active-pass');
        setTimeout(() => InputPassword.focus(), 500);
        Title.innerHTML = 'Bienvenido';
        Subtitle.innerHTML = InputEmail.value;
    };
    //Retroceder al clickear Atrás
    btnBack.onclick = (e) => {
        e.preventDefault();
        pageBox.classList.remove('active-pass')
        Title.innerHTML = 'Inicia sesión';
        Subtitle.innerHTML = 'Por favor inicia sesión para usar la plataforma';
        InputEmail.focus()
    };
    //Mostrar contraseña checkbox
    checkboxPass.onclick = () => {
        if(checkboxPass.checked) {
            InputPassword.type = 'text';
        }else{
            InputPassword.type = 'password';    
        }
    };
    //Avanzar al clickear en recuperar contraseña
    btnOlvideContraseña.onclick = (e) => {
        e.preventDefault();
        pageBox.classList.add('active-recupass');
        setTimeout(() => InputEmailRecuperarContraseña.focus(), 500);
        Title.innerHTML = 'Recuperar Contraseña';
        Subtitle.innerHTML = 'Ingresa el correo del cual deseas recuperar la contraseña';
    };
    //Retroceder al inicio al clickear Atrás
    btnBackRecuperarContraseña.onclick = (e) => {
        e.preventDefault();
        pageBox.classList.remove('active-recupass')
        Title.innerHTML = 'Inicia sesión';
        Subtitle.innerHTML = 'Por favor inicia sesión para usar la plataforma';
        InputEmail.focus()
    };
    