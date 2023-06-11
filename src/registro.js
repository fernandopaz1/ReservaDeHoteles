const registroValido = () => {
  let warnings = "";
  warningsLogin.innerHTML = "";
  esUsuarioValido = true;
  let validacionMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const storedString = localStorage.getItem("miembros");
  

  let cuentas = JSON.parse(storedString);
 
  
  if(inputLoginNombre.value.length<1){
    warnings += "Ingrese un nombre<br>";
  }
  
  if(inputLoginApellido.value.length<1){
    warnings += "Ingrese un apellido<br>";
  }
  
  if(inputLoginDNI.value.length<1){
    warnings += "Ingrese un DNI<br>";
  }
  
  if(inputLoginEmail.value.length<1){
    warnings += "Ingrese un email<br>";
  }
  
  if (!validacionMail.test(inputLoginEmail.value)) {
    warnings += "El correo electronico no es valido <br>";
  }
  
  if(inputLoginPasswordRep.value.length < 1){
    warnings += "Ingrese una contraseña <br>";
  }
  if (passwordLogin.value !== inputLoginPasswordRep.value) {
    warnings += "Las contraseñas no coinciden <br>"
  }
  
  for (let i = 0; i < cuentas.length; i++) {
    cuenta = cuentas[i];
    if (
      cuenta.usuario.localeCompare(
            usuarioLogin.value.toLowerCase()
          ) == 0
      ) {
          esUsuarioValido = false;
        }
      
      if (!esUsuarioValido) {
          warnings += "El usuario es invalido";
      }
    }
    return warnings;
};


login_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = registroValido();
  if (warnings.length != 0) {
    warningsLogin.innerHTML = warnings;
    localStorage.setItem("token", null)    
} else {
    window.alert("Registro exitoso");

    const storedString = localStorage.getItem("miembros");
    let cuentas = JSON.parse(storedString);

    cuentas.push(new Miembro(
      inputLoginNombre.value, 
      inputLoginApellido.value, 
      inputLoginDNI.value, 
      inputLoginEmail.value, 
      null, 
      null, 
      inputLoginUsername.value, 
      inputLoginPassword.value, 
      null)
    )

    let cuentasJsonString = JSON.stringify(cuentas);

    localStorage.setItem("miembros", cuentasJsonString);

    window.location.href = "login.html"
    }
});

redirectToLogin.onclick = function(){
  window.location.href = "login.html"
}