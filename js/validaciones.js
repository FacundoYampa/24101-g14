//Validaciones para formularios de "registro" e "inicio de sesion"

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form_registro');

    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Evita el envío del formulario hasta que no se hayan validado todos los campos

        //Variables con el valor de los iputs
        const nombre = document.getElementById('nombre').value;
        // const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('contraseña').value;
        const confirm_password = document.getElementById('confirmar_contraseña').value;

        //Variables con expresiones regulares p/ validaciones
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //regex para email en una variable
        const soloTextoRegex = /^[a-zA-Z\s]+$/;           //regex para que entre solo texto

        let valido = true;

        //Validaciones front
        if (nombre == "" || email == "" || password == "" || confirm_password == "") {
            valido = false;
            mostrarToast(errorVacio);
        }

            else if (!soloTextoRegex.test(nombre) || nombre.length > 51) {
                valido = false;
                mostrarToast(errorNombre);
            }

            else if (!emailRegex.test(email))//metodo para validar la expresion regular
            {
                valido = false;
                mostrarToast(errorEmail);
            }

            else if (password != confirm_password) {
                valido = false;
                mostrarToast(errorPasswords);
            }

        if (valido) {
            mostrarToast(msjExito);
            form.submit();  // Si todos los campos son válidos, envía el formulario
        }
    });
});

// Defino los mensajes de error en variables
    var errorEmail = "Debe completar con un email válido";
    var errorVacio = "Debe completar todos los campos";
    var errorPasswords = "Las contrseñas deben coincidir";
    var errorNombre = "El nombre solo debe contener letras";
    var msjExito = "Se registró correctamente";


function mostrarToast(error){

    const textoToast = document.getElementById('toast-texto');
    textoToast.innerText = error; //cambio el mensaje del toast segun el error (parámetro)

    const toastLiveExample = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
}

