const EstadoAviso = {
  activo: "activo",
  finalizado: "finalizado",
};

class Aviso {
  constructor(descripcion, fechaPublicacion, estado) {
    this.descripcion = descripcion;
    this.fechaPublicacion = fechaPublicacion;
    this.estado = estado;
  }
}

class AvisoAdopcion extends Aviso {
  constructor(descripcion, fechaPublicacion, estado, cuidadosRealizados) {
    super(descripcion, fechaPublicacion, estado);
    this.cuidadosRealizados = cuidadosRealizados;
  }
}

class AvisoBusqueda extends Aviso {
  constructor(descripcion, fechaPublicacion, estado, direccion, fechaSuceso) {
    super(descripcion, fechaPublicacion, estado);
    this.direccion = direccion;
    this.fechaSuceso = fechaSuceso;
  }
}

class PerfilMascota extends Aviso {
  constructor(
    descripcion,
    fechaPublicacion,
    estado,
    nombreMascota,
    foto,
    raza,
    edadAproximada
  ) {
    super(descripcion, fechaPublicacion, estado);
    this.nombreMascota = nombreMascota;
    this.foto = foto;
    this.raza = raza;
    this.edadAproximada = edadAproximada;
  }
}

let avisosAdopcion = [
  new AvisoAdopcion(
    "Se busca hogar para cachorro de raza mixta",
    new Date(),
    EstadoAviso.finalizado,
    "Vacunado y desparasitado"
  ),
  new AvisoAdopcion(
    "Gatito negro busca familia cariñosa",
    new Date(),
    EstadoAviso.activo,
    "Esterilizado y con todas las vacunas al día"
  ),
  new AvisoAdopcion(
    "Cachorro juguetón busca hogar amoroso",
    new Date(),
    EstadoAviso.activo,
    "Desparasitado y entrenado para hacer sus necesidades fuera"
  ),
];

const avisosBusqueda = [
  new AvisoBusqueda(
    "Se busca perro extraviado",
    new Date(),
    EstadoAviso.activo,
    "Calle Principal, Ciudad",
    new Date("2023-05-15")
  ),
  new AvisoBusqueda(
    "Gato perdido en zona residencial",
    new Date(),
    EstadoAviso.finalizado,
    "Avenida Central, Ciudad",
    new Date("2023-04-20")
  ),
  new AvisoBusqueda(
    "Perro extraviado en parque",
    new Date(),
    EstadoAviso.activo,
    "Avenida Libertad, Ciudad",
    new Date("2023-05-15")
  ),
  new AvisoBusqueda(
    "Gato perdido cerca de la plaza",
    new Date(),
    EstadoAviso.activo,
    "Calle Principal, Ciudad",
    new Date("2023-04-20")
  ),
  new AvisoBusqueda(
    "Cachorro desaparecido en el barrio",
    new Date(),
    EstadoAviso.activo,
    "Calle Primavera, Ciudad",
    new Date("2023-06-01")
  ),
  new AvisoBusqueda(
    "Gata perdida en zona residencial",
    new Date(),
    EstadoAviso.finalizado,
    "Avenida Central, Ciudad",
    new Date("2023-03-10")
  ),
  new AvisoBusqueda(
    "Perro extraviado en área rural",
    new Date(),
    EstadoAviso.activo,
    "Camino del Bosque, Ciudad",
    new Date("2023-04-05")
  ),
  new AvisoBusqueda(
    "Gato negro perdido en el centro",
    new Date(),
    EstadoAviso.finalizado,
    "Plaza Mayor, Ciudad",
    new Date("2023-05-18")
  ),
  new AvisoBusqueda(
    "Cachorro desaparecido en parque de diversiones",
    new Date(),
    EstadoAviso.activo,
    "Avenida Alegria, Ciudad",
    new Date("2023-07-10")
  ),
  new AvisoBusqueda(
    "Gato siamés extraviado en zona comercial",
    new Date(),
    EstadoAviso.activo,
    "Calle Comercio, Ciudad",
    new Date("2023-06-25")
  ),
  new AvisoBusqueda(
    "Perro mestizo perdido cerca del río",
    new Date(),
    EstadoAviso.finalizado,
    "Calle Rioja, Ciudad",
    new Date("2023-03-28")
  ),
  new AvisoBusqueda(
    "Gata blanca desaparecida en el vecindario",
    new Date(),
    EstadoAviso.activo,
    "Calle Amistad, Ciudad",
    new Date("2023-07-05")
  ),
];
