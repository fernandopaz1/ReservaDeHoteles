const token = localStorage.getItem("token")



templateMedioDePagoDigital = `
<div class="avisoCardContainer">
<h3 class="aviso_name_card">Medio de Pago digital</h3>
<span onClick="deleteMedio(event)" order={order} class="close">&times;</span>
<div class="body_aviso_card">
<div class="datos_container_card">
<p class="av_descripcion_card">Nombre: {nombre}</p>
<p class="av_horario_card">Número: {numero}</p>
<p class="av_telefono_card">Fecha de vencimiento: {fechaVencimiento}</p>
</div>
</div>
</div>
`;

const renderMedioDePagoDigital = (medio, order) => {
  medioDePagoContainer.innerHTML = "";
  
  
  let orgTemplate = templateMedioDePagoDigital;
  
  // Create elements
  orgTemplate = orgTemplate.replace("{nombre}", medio.nombre);
  orgTemplate = orgTemplate.replace(
    "{numero}",
    medio.numero
    );
    orgTemplate = orgTemplate.replace("{fechaVencimiento}", medio.fechaVencimiento);
    
    orgTemplate = orgTemplate.replace("{order}", order);
    
    
    const orgDiv = document.createElement("div");
    orgDiv.innerHTML = orgTemplate;
    /*
    // Append the post div to the main div
    */
    medioDePagoContainer.appendChild(orgDiv);
   
}

templateTarjeta = `
<div class="avisoCardContainer">
<h3 class="aviso_name_card">Medio de Pago digital</h3>
<span onClick="deleteMedio(event)" order={order} class="close">&times;</span>
<div class="body_aviso_card">
<div class="datos_container_card">
<p class="av_descripcion_card">Nombre: {nombre}</p>
<p class="av_horario_card">email: {email}</p>
<p class="av_telefono_card">CVU: {cvu}</p>
</div>
</div>
</div>
`;

const renderTarjeta = (medio, order) => {
  medioDePagoContainer.innerHTML = "";
  
  
  let orgTemplate = templateTarjeta;
  
  // Create elements
  orgTemplate = orgTemplate.replace("{nombre}", medio.nombre);
  orgTemplate = orgTemplate.replace(
    "{email}",
    medio.email
    );
    orgTemplate = orgTemplate.replace("{cvu}", medio.cvu);
    
    orgTemplate = orgTemplate.replace("{order}", order);
    
    
    const orgDiv = document.createElement("div");
    orgDiv.innerHTML = orgTemplate;
    /*
    // Append the post div to the main div
    */
    medioDePagoContainer.appendChild(orgDiv);
   
}


if(!token){
  modal.style.display = "block";
}else {
  const storedString = localStorage.getItem("miembros");
  let cuentas = JSON.parse(storedString);
  
  let cuenta
  
  for(let i=0; i<cuentas.length; i++){
    if(cuentas[i].usuario === token){
      cuenta = cuentas[i] 
    }
  }
  inputLoginNombre.innerHTML = cuenta.nombre
  inputLoginApellido.innerHTML = cuenta.apellido
  inputLoginDNI.innerHTML = cuenta.dni
  inputLoginEmail.innerHTML = cuenta.email
  inputLoginUsername.innerHTML = cuenta.usuario
  
  medioDePagoContainer.innerHTML = ""
  let mediosDePago = cuenta.mediosDePago
  for(let i=0; i<mediosDePago.length; i++){
    // si tiene cvu es medio digital
    if(mediosDePago[i].cvu){
      renderMedioDePagoDigital(mediosDePago[i], i)
    }else{
      renderTarjeta(mediosDePago[i], i)
    }
  }
}

buttonGoToLogin.onclick = function(){
  window.location.href = "login.html"
}