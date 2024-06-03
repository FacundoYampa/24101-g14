/* <script>
  function validarFormulario() {
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('password').value;

    if(email === "" || contraseña === "") {
      alert('Ingrese email y contraseña');
      return false;
    }
  }
</script> */

//Validación para login.html
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  // Validar los datos ingresados por el usuario
  if(email === "" || contraseña === "") {
    alert ('Ingrese email y contraseña');
    return false;
    }
  }
);