const tokenUser = localStorage.getItem("token")
storedStringUsers = localStorage.getItem("miembros");
cuentas = JSON.parse(storedStringUsers);

storedStringUsers = localStorage.getItem("reservaPendiente");
reservaPendiente = JSON.parse(storedStringUsers);

let optionDefault = document.createElement("option");
optionDefault.text = "Seleccion medio de Pago";
optionDefault.value = "";

myModalMedioPagoDigital.style.display = 'none'
myModalTarjeta.style.display = 'none'

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
    myModalTarjeta.style.display = 'none'
  }else if(selectTipoMedioDePago.value === 'tarjeta'){
    myModalTarjeta.style.display = 'block'
    myModalMedioPagoDigital.style.display = 'none'
    selectMedioDePago.value = ""
  }else if(selectTipoMedioDePago.value === 'virtual'){
    myModalTarjeta.style.display = 'none'
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
    myModalTarjeta.style.display = 'none'
  }else if(selectTipoMedioDePago.value === 'tarjeta'){
    myModalTarjeta.style.display = 'block'
    myModalMedioPagoDigital.style.display = 'none'
    selectMedioDePago.value = ""
  }else if(selectTipoMedioDePago.value === 'virtual'){
    myModalTarjeta.style.display = 'none'
    myModalMedioPagoDigital.style.display = 'block'
    selectMedioDePago.value = ""
  }
}

if(!tokenUser){
  selectMedioDePagoContainer.style.display = "none";
}else{

  
  for(let i=0; i<cuentas.length; i++){
    if(cuentas[i].email === tokenUser){
      cuenta = cuentas[i] 
    }
  }

  addMedioDePagoToSelect(cuenta.mediosDePago, "")

}