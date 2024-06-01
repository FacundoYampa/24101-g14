<script>
  function validarFormulario() {
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('password').value;

    if(email === "" || contraseña === "") {
      alert("Por favor, ingrese usuario y contraseña");
      return false;
    }
  }
</script>