const hotelesDiv = document.getElementById("blogPosts");

const templateHotel = `
  <div class="avisoCardContainer" >
  <h3 class="aviso_name_card">{nombre}  {estrellas}</h3>
  <div class="body_aviso_card">
    <div class="datos_container_card">
      <p class="av_descripcion_card">Dirección: {direccion}</p>
      <p class="av_descripcion_card">Prestaciones: {prestaciones}</p>
      <p class="av_descripcion_card">Servicios: {servicios}</p>

      <p class="av_horario_card">Región: {zona}</p>
      <p class="av_telefono_card">Habitaciones disponibles: {habitaciones}</p>
    </div>
    <div>
      <img class="imagen_org_card" src="{imagen}" />
      <button class="buttonReservar" onClick="reservarHotel(event)" hotelId="{id}">Reservar</button>
    </div>
  </div>
</div>
  `;


// Iterate over the blog posts array and generate HTML
function renderHotelesCards(hoteles) {
  // antes de dibujar las cards elimina todo
  hotelesDiv.innerHTML = "";

  hoteles.forEach((hotel) => {
    let hotelTemplate = templateHotel;

    // Create elements
    hotelTemplate = hotelTemplate.replace("{id}", hotel.id);

    hotelTemplate = hotelTemplate.replace("{nombre}", hotel.nombre);
    hotelTemplate = hotelTemplate.replace(
    "{direccion}",
    hotel.direccion
    );

    let estrellas =""
    for(let i=0; i<hotel.cantidadDeEstrellas; i++){
      estrellas += "&starf;"
    }
    for(let i=estrellas.length; i<6; i++){
      estrellas += "&star;"
    }


    hotelTemplate = hotelTemplate.replace("{estrellas}",estrellas);
    hotelTemplate = hotelTemplate.replace("{prestaciones}", hotel.prestaciones);
    hotelTemplate = hotelTemplate.replace("{servicios}", hotel.servicios);

    hotelTemplate = hotelTemplate.replace("{zona}", hotel.zona);
    hotelTemplate = hotelTemplate.replace("{habitaciones}", hotel.habitaciones.length);
    hotelTemplate = hotelTemplate.replace("{imagen}", hotel.img);

    
    const hotelDiv = document.createElement("div");
    hotelDiv.classList.add("hotelDiv")
    hotelDiv.innerHTML = hotelTemplate;
    /*
    // Append the post div to the main div
    */
    hotelesDiv.appendChild(hotelDiv);
  });
}

const validarReservaHoteles = () => {
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

const reservarHotel = (event) => {
  let error  = validarReservaHoteles()
  if(error !== ""){
    errorBusquedaHotel.innerHTML = errors
  }else{
    let hotelId = event.currentTarget.getAttribute('hotelId');
    let reservaPendiente = {
      cantHuespedes: inputCantidadHuespedes.value,
      hotel: hoteles[hotelId],
      fechaIngreso: inputIngreso.value,
      fechaEgreso: inputEgreso.value
    }
    const miembrosJsonString = JSON.stringify(reservaPendiente);
    localStorage.setItem("reservaPendiente", miembrosJsonString); 

    window.location.href = "reservar.html"
  }

}


