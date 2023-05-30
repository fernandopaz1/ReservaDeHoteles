const organizacionesDiv = document.getElementById("blogPosts");

const template = `
  <div class="organizationCardContainer {destacada}">
  <h3 class="org_name_card">{nombre}</h3>
  <div class="body_organization_card">
    <div class="datos_container_card">
      <p class="org_descripcion_card">{descripcion}</p>
      <p class="org_horario_card">Horario: {horario}</p>
      <p class="org_telefono_card">Telefono: {telefono}</p>
    </div>
    <img class="imagen_org_card" src="{imagen}" />
  </div>
</div>
  `;

let toVisualizeInMap = [];

// Iterate over the blog posts array and generate HTML
function renderOrganizationCards(organizaciones) {
  // antes de dibujar las cards elimina todo
  organizacionesDiv.innerHTML = "";

  //Indico que son las organizaciones a visualizar en el mapa
  toVisualizeInMap = organizaciones;
  organizaciones.forEach((organization) => {
    // Create elements
    let orgTemplate = template;
    orgTemplate = orgTemplate.replace("{nombre}", organization.nombre);
    orgTemplate = orgTemplate.replace(
      "{descripcion}",
      organization.descripcion
    );
    orgTemplate = orgTemplate.replace("{horario}", organization.horarios);
    orgTemplate = orgTemplate.replace("{telefono}", organization.telefono);
    orgTemplate = orgTemplate.replace("{imagen}", organization.foto);

    // si la organizacion esta destacada agrego la clase correspodiente sino no se agrega nada
    orgTemplate = orgTemplate.replace(
      "{destacada}",
      organization.destacada ? "destacada glass" : ""
    );

    const orgDiv = document.createElement("div");
    orgDiv.innerHTML = orgTemplate;
    /*
    const titleElement = document.createElement("h2");
    const contentElement = document.createElement("p");

    // Set the content
    titleElement.textContent = organization.nombre;
    contentElement.textContent = organization.descripcion;

    // Append elements to the post div
    orgDiv.appendChild(titleElement);
    orgDiv.appendChild(contentElement);

    // Append the post div to the main div
    */
    organizacionesDiv.appendChild(orgDiv);
  });
}

renderOrganizationCards(organizaciones);
