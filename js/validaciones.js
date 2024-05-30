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
            // const toastLiveExample = document.getElementById('liveToast');
            // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
            // toastBootstrap.show();
            alert("Debes completar todos los campos");
        }

            else if (!soloTextoRegex.test(nombre) || nombre.length > 51) {
                valido = false;
                alert("el nombre debe contener solo letras");
            }

            else if (!emailRegex.test(email))//metodo para validar la expresion regular
            {
                valido = false;
                // const toastLiveExample = document.getElementById('liveToastMail');
                // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                // toastBootstrap.show(); 
                //podria usar una funcion y cambiar parametros
                alert("Debe completar con un email con formato válido");
            }

            else if (password != confirm_password) {
                valido = false;
                alert("Las costraseñas deben ser iguales");
            }

        if (isValid) {
            form.submit();  // Si todos los campos son válidos, envía el formulario
        }
    });
});
