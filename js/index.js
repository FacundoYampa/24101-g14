document.addEventListener('DOMContentLoaded', () => {
    
    // -------------------Validación formulario de inicio de sesion --------------
    const formLogin = document.getElementById('form_login');

    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();  // Evita el envío del formulario hasta que no se hayan validado todos los campos

        //Variables con el valor de los iputs
        const emailLogin = document.getElementById('email_login').value;
        const passwordLogin = document.getElementById('contraseña_login').value;

        //Variables con expresiones regulares p/ validaciones
        const emailRegexLogin = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //regex para email en una variable

        let validoInicio = true;

        //Validaciones front
        if (emailLogin == "" || passwordLogin=="") {
            validoInicio = false;
            mostrarToast(errorVacio);
        }

            else if (!emailRegexLogin.test(emailLogin))//metodo para validar la expresion regular
            {
                validoInicio = false;
                mostrarToast(errorEmail);
            }

        if (validoInicio) {
            mostrarToast(msjExitoLogin);
            formLogin.submit();  // Si todos los campos son válidos, envía el formulario
        }
    });
})

// Defino los mensajes de error en variables
var errorEmail = "Debe completar con un email válido";
var errorVacio = "Debe completar todos los campos";
var errorPasswords = "Las contrseñas deben coincidir";
var msjExitoLogin = "Inició sesión correctamente";

function mostrarToast(error){

    const textoToast = document.getElementById('toast-texto');
    textoToast.innerText = error; //cambio el mensaje del toast segun el error (parámetro)

    const toastLiveExample = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
}
