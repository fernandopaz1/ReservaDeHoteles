const accessoValido = () => {
  let warnings = "";
  warningsLogin.innerHTML = "";
  esUsuarioValido = false;
  esContraseniaValida = false;
  tieneMuchosIntentos = false;

  const storedString = localStorage.getItem("miembros");
  

  let cuentasPacientes = JSON.parse(storedString);

  for (let i = 0; i < cuentasPacientes.length; i++) {
      cuenta = cuentasPacientes[i];
      if (
          cuenta.usuario.localeCompare(
            usuarioLogin.value.toLowerCase()
          ) == 0
      ) {
          esUsuarioValido = true;
          if (cuenta.password.localeCompare(passwordLogin.value) == 0) {
              esContraseniaValida = true;
              return "";
          }
      }
      if (!esUsuarioValido) {
          warnings = "El usuario es invalido";
      }
      if (!esContraseniaValida) {
          warnings = "La contraseña es invalida";
      }
      if (!esUsuarioValido && !esContraseniaValida) {
          warnings = "El usuario y la contraseña son invalidos";
      }
      if (tieneMuchosIntentos) {
          warnings = "Cuenta bloqueada";
      }
    }
    return warnings;
};


login_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = accessoValido();
  if (warnings.length != 0) {
    warningsLogin.innerHTML = warnings;
    localStorage.setItem("token", null)    
} else {
    window.alert("Ingreso exitoso");
    window.location.href = "hoteles.html"
    localStorage.setItem("token", usuarioLogin.value);
    }
});

redirectToRegistro.onclick = function(){
    window.location.href = "registro.html"
}