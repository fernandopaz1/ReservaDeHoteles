const tokenUser = localStorage.getItem("token")
 storedStringUsers = localStorage.getItem("miembros");
 cuentas = JSON.parse(storedStringUsers);



templateMedioDePagoDigital = `
<div class="avisoCardContainer">
<h3 class="aviso_name_card">Medio de Pago digital</h3>
<span onClick="deleteMedio(event)" order="{order}" class="close">&times;</span>
<div class="body_aviso_card">
<div class="datos_container_card">
<p class="av_descripcion_card">Nombre: {nombre}</p>
<p class="av_horario_card">email: {email}</p>
<p class="av_telefono_card">CVU: {cvu}</p>
</div>
</div>
</div>
`;

templateTarjeta = `
<div class="avisoCardContainer">
<h3 class="aviso_name_card">Tarjeta de crédito</h3>
<span onClick="deleteMedio(event)" order="{order}" class="close">&times;</span>
<div class="body_aviso_card">
<div class="datos_container_card">
<p class="av_descripcion_card">Nombre: {nombre}</p>
<p class="av_horario_card">Número: {numero}</p>
<p class="av_telefono_card">Fecha de vencimiento: {fechaVencimiento}</p>
</div>
</div>
</div>
`;



const renderMedioDePago = (mediosDePago) => {
  let orgTemplate
  medioDePagoContainer.innerHTML = ""

  mediosDePago.forEach((medio, order) => {

    if(medio.cvu){
      
      
      orgTemplate = templateMedioDePagoDigital;
      
      // Create elements
      orgTemplate = orgTemplate.replace("{nombre}", medio.nombre);
      orgTemplate = orgTemplate.replace(
        "{email}",
        medio.email
        );
        orgTemplate = orgTemplate.replace("{cvu}", medio.cvu);
        
        orgTemplate = orgTemplate.replace("{order}", order);
        
        
      }else{
        orgTemplate = templateTarjeta;
        
        // Create elements
        orgTemplate = orgTemplate.replace("{nombre}", medio.nombre);
        orgTemplate = orgTemplate.replace(
          "{numero}",
          medio.numero
      );
      orgTemplate = orgTemplate.replace("{fechaVencimiento}", medio.fechaVencimiento);
      
      orgTemplate = orgTemplate.replace("{order}", order);
      
      
    }
    
    const orgDiv = document.createElement("div");
    orgDiv.innerHTML = orgTemplate;
    /*
    // Append the post div to the main div
    */
   medioDePagoContainer.appendChild(orgDiv.cloneNode(true));
   
  })
}



const saveCuentas = (cuentas) => {
  const miembrosJsonString = JSON.stringify(cuentas);
    
  localStorage.setItem("miembros", miembrosJsonString); 

  storedStringUsers = localStorage.getItem("miembros");
  cuentas = JSON.parse(storedStringUsers);

  for(let i=0; i<cuentas.length; i++){
    if(cuentas[i].email === tokenUser){
      cuenta = cuentas[i] 
    }
  }

  renderMedioDePago(cuenta.mediosDePago)

}

if(!tokenUser){
  modal.style.display = "block";
}else {
  medioDePagoContainer.innerHTML = "";
  
  for(let i=0; i<cuentas.length; i++){
    if(cuentas[i].email === tokenUser){
      cuenta = cuentas[i] 
    }
  }
  inputLoginNombre.innerHTML = cuenta.nombre
  inputLoginApellido.innerHTML = cuenta.apellido
  inputLoginDNI.innerHTML = cuenta.dni
  inputLoginEmail.innerHTML = cuenta.email
  inputLoginUsername.innerHTML = cuenta.usuario
  
  let mediosDePago = cuenta.mediosDePago
  renderMedioDePago(mediosDePago)
  
}

buttonGoToLogin.onclick = function(){
  window.location.href = "login.html"
}

const deleteMedio = (event) => {
  let order = event.currentTarget.getAttribute('order');
  delete cuenta.mediosDePago[order]

  cuenta.mediosDePago = cuenta.mediosDePago.filter(m => m !== null)
  const miembrosJsonString = JSON.stringify(cuentas);
    
  localStorage.setItem("miembros", miembrosJsonString); 

  storedStringUsers = localStorage.getItem("miembros");
  cuentas = JSON.parse(storedStringUsers);

  for(let i=0; i<cuentas.length; i++){
    if(cuentas[i].email === tokenUser){
      cuenta = cuentas[i] 
    }
  }

  renderMedioDePago(cuenta.mediosDePago)

}

agregarTarjetaBtn.onclick = function(){
  modalTarjeta.style.display="block"
} 

agregarMedioDigitalBtn.onclick = function(){
  myModalMedioPagoDigital.style.display="block"
} 

closeMyModalMedioPagoDigital.onclick = function(){
  myModalMedioPagoDigital.style.display="none"
}

closeMyModalTarjeta.onclick = function(){
  modalTarjeta.style.display="none"
}

function esNumeroTarjetaValido(numeroTarjeta) {
  // Eliminar los espacios en blanco y guiones del número de tarjeta
  var numeroLimpio = numeroTarjeta.replace(/\s/g, "").replace(/-/g, "");

  // Verificar que el número de tarjeta contenga solo dígitos y tenga una longitud válida
  if (!/^\d+$/.test(numeroLimpio) || numeroLimpio.length < 13 || numeroLimpio.length > 19) {
    return false;
  }

  // Aplicar el algoritmo de Luhn para verificar la validez del número de tarjeta
  var suma = 0;
  var doblar = false;
  for (var i = numeroLimpio.length - 1; i >= 0; i--) {
    var digito = parseInt(numeroLimpio.charAt(i), 10);
    if (doblar) {
      digito *= 2;
      if (digito > 9) {
        digito -= 9;
      }
    }
    suma += digito;
    doblar = !doblar;
  }
  return suma % 10 === 0;
}

const validarTarjetaModal = () => {
  let warnings = "";
  errorNewtarjeta.innerHTML = "";
  
  if(!inputNombreTrjeta.value){
    warnings += "Nombre  de tarjeta inválido<br>"
  }

  if(inputNumeroTarjeta.value===""){
    warnings += "Falta ingresar número de tarjeta<br>"
  }
  else if(!esNumeroTarjetaValido(inputNumeroTarjeta.value)){
    warnings += "Número de tarjeta inválido<br>"
  }
  if(inputFechaVencimientoNuevaTarjeta.value < new Date()){
    warnings += "La tarjeta esta expirada<br>"

  }
  return warnings
}


function esCVUValido(cvu) {
  // Eliminar los espacios en blanco del CVU
  var cvuLimpio = cvu.replace(/\s/g, "");

  // Verificar que el CVU contenga solo dígitos y tenga una longitud válida
  if (!/^\d+$/.test(cvuLimpio) || cvuLimpio.length !== 22) {
    return false;
  }

  // Verificar el dígito de control del CVU
  var digitoControl = parseInt(cvuLimpio.charAt(cvuLimpio.length - 1), 10);
  var cvuSinDigitoControl = cvuLimpio.slice(0, -1);
  var suma = 0;
  var multiplicador = 7;

  for (var i = cvuSinDigitoControl.length - 1; i >= 0; i--) {
    var digito = parseInt(cvuSinDigitoControl.charAt(i), 10);
    suma += digito * multiplicador;
    multiplicador = multiplicador === 2 ? 7 : multiplicador - 1;
  }

  var digitoVerificador = 11 - (suma % 11);
  if (digitoVerificador === 11) {
    digitoVerificador = 0;
  } else if (digitoVerificador === 10) {
    digitoVerificador = 9;
  }
  
  return digitoControl === digitoVerificador;
}

const isMailValido = (mail) =>{
  let validacionMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return validacionMail.test(mail)
}

const validarMedioDigitalModal = ()=>{
  let warnings = "";
  errorNewMedioDigital.innerHTML = ""

  if(!inputNombreMedioDigital.value){
    warnings += "Nombre  de billetera virtual inválido<br>"
  }

  if(inputCVUMedioDigital.value===""){
    warnings += "Falta ingresar CVU<br>"
  }
  else if(!esCVUValido(inputCVUMedioDigital.value)){
    warnings += "CVU de tarjeta inválido<br>"
  }
  if(!isMailValido(inputEmailMedioDigital.value)){
    warnings += "El mail no es válido<br>"

  }
  return warnings
}


buttonSaveMedioDigital.onclick = (e)=>{
    let errores = validarMedioDigitalModal();
    if(errores!=""){
      errorNewMedioDigital.innerHTML = errores
    }else{
      let billeteraVirtual = new BilleteraVirtual(inputNombreMedioDigital.value, inputCVUMedioDigital.value, inputEmailMedioDigital.value)
      cuenta.mediosDePago.push(billeteraVirtual)
      
      saveCuentas(cuentas)
      myModalMedioPagoDigital.style.display="none"
    }
}