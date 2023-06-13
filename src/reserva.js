const tokenUser = localStorage.getItem("token")
storedStringUsers = localStorage.getItem("miembros");
cuentas = JSON.parse(storedStringUsers);
let cuenta
for(let i=0; i<cuentas.length; i++){
  if(cuentas[i].email === tokenUser){
    cuenta = cuentas[i] 
  }
}

storedStringUsers = localStorage.getItem("reservaPendiente");
reservaPendiente = JSON.parse(storedStringUsers);

let optionDefault = document.createElement("option");
optionDefault.text = "Seleccion medio de Pago";
optionDefault.value = "";

myModalMedioPagoDigital.style.display = 'none'
modalTarjeta.style.display = 'none'

const addMedioDePagoToSelect = (mediosDePago, tipoMedio) => {
  if(selectMedioDePago !== null){
    selectMedioDePago.innerHTML = ""
    selectMedioDePago.add(optionDefault)
    for(var m in mediosDePago){
      let medio = mediosDePago[m]
      if((!tipoMedio) || (tipoMedio === "tarjeta" && !medio.cvu) || (tipoMedio === "virtual" && medio.cvu)){

        thisId = m;
        thisText = !!medio.cvu ? `Billetera ...${medio.cvu.slice(-3)}` : `Tarjeta ...${medio.numero.slice(-3)}`;
        var option = document.createElement("option");
        option.text = thisText;
        option.value = thisId;
        selectMedioDePago.add(option);
      }
    }
  }
  
} 

selectTipoMedioDePago.onchange = (event) => {
  if(!selectTipoMedioDePago.value){
    myModalMedioPagoDigital.style.display = 'none'
    modalTarjeta.style.display = 'none'
  }else if(selectTipoMedioDePago.value === 'tarjeta'){
    modalTarjeta.style.display = 'block'
    myModalMedioPagoDigital.style.display = 'none'
    selectMedioDePago.value = ""
  }else if(selectTipoMedioDePago.value === 'virtual'){
    modalTarjeta.style.display = 'none'
    myModalMedioPagoDigital.style.display = 'block'
    selectMedioDePago.value = ""
  }
  for(let i=0; i<cuentas.length; i++){
    if(cuentas[i].email === tokenUser){
      cuenta = cuentas[i] 
    }
  }
  addMedioDePagoToSelect(cuenta.mediosDePago, event.target.value)
}

selectMedioDePago.onchange = (event) => {
  if(selectMedioDePago.value){
    myModalMedioPagoDigital.style.display = 'none'
    modalTarjeta.style.display = 'none'
  }else if(selectTipoMedioDePago.value === 'tarjeta'){
    modalTarjeta.style.display = 'block'
    myModalMedioPagoDigital.style.display = 'none'
    selectMedioDePago.value = ""
  }else if(selectTipoMedioDePago.value === 'virtual'){
    modalTarjeta.style.display = 'none'
    myModalMedioPagoDigital.style.display = 'block'
    selectMedioDePago.value = ""
  }
}

if(!tokenUser || tokenUser === "null"){
  selectMedioDePagoContainer.style.display = "none";
  modal.style.display = "block";

}else{
  
  for(let i=0; i<cuentas.length; i++){
    if(cuentas[i].email === tokenUser){
      cuenta = cuentas[i] 
    }
  }
  inputReservaNombre.value = cuenta.nombre
  inputReservaApellido.value = cuenta.apellido
  inputReservaEmail.value = cuenta.email
  inputReservaDNI.value = cuenta.dni
  addMedioDePagoToSelect(cuenta.mediosDePago, "")

}

function calcularEdad(fechaNacimiento) {
  var fechaActual = new Date();
  var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

  // Restar un año si el mes actual es anterior al mes de nacimiento
  var mesActual = fechaActual.getMonth();
  var mesNacimiento = fechaNacimiento.getMonth();
  if (mesActual < mesNacimiento) {
    edad--;
  }

  // Restar un año si el mes actual es igual al mes de nacimiento,
  // pero el día actual es anterior al día de nacimiento
  if (mesActual === mesNacimiento) {
    var diaActual = fechaActual.getDate();
    var diaNacimiento = fechaNacimiento.getDate();
    if (diaActual < diaNacimiento) {
      edad--;
    }
  }

  return edad;
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

const validarMedioDePago  = () => {
  if(modalTarjeta.style.display === "block"){
    return validarTarjetaModal();
  }
  else if(myModalMedioPagoDigital.style.display === "block"){
    return validarMedioDigitalModal();
  }else{
    if(!selectMedioDePago.value){
      return "Seleccione un medio de pago <br>"
    }else{
      return ""
    }
  }
}


const validarReserva  = () => {
  let warnings = ""
  warningsReserva.innerHTML = ""
  let validacionMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  if(!inputReservaNombre.value){
    warnings += "Debe seleccionar un nombre <br>"
  }
  if(!inputReservaApellido.value){
    warnings += "Debe seleccionar un apellido <br>"
  }
  if(!inputReservaNombre.value){
    warnings += "Debe seleccionar un nombre <br>"
  }
  if(!/^\d+$/.test(inputReservaDNI.value)){
    warnings += "El dni debe ser un nombre <br>"
  }
  if(!inputFechaNaciemiento.value){
    warnings += "Debe seleccionar una fecha de nacimiento <br>" 
  }else if(calcularEdad(new Date(inputFechaNaciemiento.value)) < 18){
    warnings += "El titular de la reserva debe ser mayor de edad <br>" 
  }
  if(!validacionMail.test(inputReservaEmail.value)){
    warnings += "Ingrese un mail válido <br>" 
  }
  warnings += validarMedioDePago()

  return warnings
}

const getMedioDePago = () => {
  if(modalTarjeta.style.display === "block"){
    return new Tarjeta(
      inputNombreTrjeta.value, 
      inputNumeroTarjeta.value, 
      inputFechaVencimientoNuevaTarjeta.value)
  }
  else if(myModalMedioPagoDigital.style.display === "block"){
    return new BilleteraVirtual(
      inputNombreMedioDigital.value,
      inputCVUMedioDigital.value,
      inputEmailMedioDigital.value)
  }else{
    if(selectMedioDePago.value){
      return selectMedioDePago.value
    }else{
      return null
    }
  }
}

reservaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = validarReserva();
  if (warnings.length != 0) 
  {    
    warningsReserva.innerHTML = warnings
  } else {

    if(!cuenta){
      let medioDePago = getMedioDePago()
  
  
      let reserva = new  Reserva(
        reservaPendiente.hotel, 
        inputReservaNombre.value, 
        inputReservaApellido.value,
        inputFechaNaciemiento.value,
        inputReservaDNI.value,
        reservaPendiente.fechaIngreso,
        reservaPendiente.fechaEgreso,
        reservaPendiente.cantHuespedes,
        medioDePago);
      
      cuenta.reservas.push(reserva)
  
      const miembrosJsonString = JSON.stringify(cuentas);
      
      localStorage.setItem("miembros", miembrosJsonString); 
  
      storedStringUsers = localStorage.getItem("miembros");
      cuentas = JSON.parse(storedStringUsers);

    }

    window.alert("Ingreso exitoso");
    window.location.href = "hoteles.html"
    localStorage.setItem("token", usuarioLogin.value);
  }
})

buttonGoToLogin.onclick = function(){
  window.location.href = "login.html"
}