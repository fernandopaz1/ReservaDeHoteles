if(selectRegion !== null){
  for(var s in Zona){
    thisId = s;
    thisText = Zona[s];
    var option = document.createElement("option");
    option.text = thisText;
    option.value = thisId;
    selectRegion.add(option);
  }
}

const validarBusquedaHoteles = () => {
  errorBusquedaHotel.innerHTML = ""
  let warnings = ""
  if(!inputIngreso.value || !inputEgreso.value){
    warnings += "Ingrese la fecha de ingreso y egreso<br>"
  }
  else if(inputIngreso.value && (new Date(inputIngreso.value) < new Date())) {
    warnings += "La fecha de ingreso no puede ser anterior a la actual <br>"
  }
  else if(inputIngreso.value && inputEgreso.value && (new Date(inputIngreso.value) > new Date(inputEgreso.value))){
    warnings += "La fecha de ingreso no puede ser posterior a la de egreso<br>"
  }
  if(!inputCantidadHuespedes.value){
    warnings += "Ingrese la cantidad de huespedes<br>"
  }
  return warnings
}


buttonBuscarHoteles.onclick = () => {
  let errors = validarBusquedaHoteles();
  if(errors !== ""){
    errorBusquedaHotel.innerHTML = errors
  }else{
    renderHotelesCards(buscadorDeHoteles(inputCantidadHuespedes.value, selectRegion.value));
  }
} 