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
<h3 class="aviso_name_card">Medio de Pago digital</h3>
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