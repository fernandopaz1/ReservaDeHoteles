const ActividadesOrganizaciones = {
  colecta: "colecta bénefica",
  capacitaciones: "capacitaciones",
  visitas: "visitas guiadas",
};

const ServciosOrganizaciones = {
  vacunacion: "vacunacion",
  veterinario: "veterinario",
  adopcion: "adopcion",
  guarderia: "guarderia",
  entrenamiento: "entrenamiento",
};

class Organizacion {
  constructor(
    nombre,
    descripcion,
    direccion,
    horarios,
    telefono,
    foto,
    destacada,
    servicios,
    actividades
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.direccion = direccion;
    this.horarios = horarios;
    this.telefono = telefono;
    this.foto = foto;
    this.destacada = destacada;
    this.servicios = servicios;
    this.actividades = actividades;
  }
}

let organizaciones = [
  new Organizacion(
    "PetAdopt",
    "Organización dedicada a la adopción de mascotas",
    new DireccionNormalizada({
      altura: 530,
      cod_calle: 234926,
      cod_calle_cruce: null,
      cod_partido: "malvinas_argentinas",
      direccion: "Los Andes 530, Malvinas Argentinas",
      nombre_calle: "Los Andes",
      nombre_calle_cruce: "",
      nombre_localidad: "Pablo Nogués",
      nombre_partido: "Malvinas Argentinas",
      tipo: "calle_altura",
    }),
    "Lunes a viernes de 9:00 AM a 5:00 PM",
    "123-456-789",
    "persistencia/organizacion/imagenes/1.png",
    true,
    [ServciosOrganizaciones.adopcion, ServciosOrganizaciones.entrenamiento],
    [
      ActividadesOrganizaciones.capacitaciones,
      ActividadesOrganizaciones.colecta,
    ]
  ),
  new Organizacion(
    "AnimalRescue",
    "Rescate y rehabilitación de animales en situación de riesgo",
    new DireccionNormalizada({
      altura: 1150,
      cod_calle: 180520,
      cod_calle_cruce: null,
      cod_partido: "tigre",
      direccion: "Juan Mar\u00eda Guti\u00e9rrez 1150, Tigre",
      nombre_calle: "Juan Mar\u00eda Guti\u00e9rrez",
      nombre_calle_cruce: "",
      nombre_localidad: "Benav\u00eddez",
      nombre_partido: "Tigre",
      tipo: "calle_altura",
    }),
    "Martes a sábado de 10:00 AM a 6:00 PM",
    "987-654-321",
    "persistencia/organizacion/imagenes/1.png",
    false,
    [ServciosOrganizaciones.adopcion, ServciosOrganizaciones.guarderia],
    [
      ActividadesOrganizaciones.capacitaciones,
      ActividadesOrganizaciones.visitas,
    ]
  ),
  new Organizacion(
    "PawsInNeed",
    "Ayuda a animales abandonados y enfermos",
    "Calle Amistad, Ciudad",
    "Lunes a viernes de 8:00 AM a 4:00 PM",
    "555-123-456",
    "persistencia/organizacion/imagenes/1.png",
    true,
    [ServciosOrganizaciones.veterinario, ServciosOrganizaciones.entrenamiento],
    [ActividadesOrganizaciones.colecta, ActividadesOrganizaciones.visitas]
  ),
  new Organizacion(
    "HappyTails",
    "Fomentando la adopción responsable de mascotas",
    "Calle Felicidad, Ciudad",
    "Lunes a sábado de 11:00 AM a 7:00 PM",
    "777-888-999",
    "persistencia/organizacion/imagenes/1.png",
    false,
    [ServciosOrganizaciones.adopcion, ServciosOrganizaciones.vacunacion],
    [
      ActividadesOrganizaciones.visitas,
      ActividadesOrganizaciones.capacitaciones,
    ]
  ),
  new Organizacion(
    "RescueMeow",
    "Rescate y cuidado de gatos callejeros",
    "Avenida Gatos, Ciudad",
    "Miércoles a domingo de 12:00 PM a 8:00 PM",
    "444-555-666",
    "persistencia/organizacion/imagenes/1.png",
    true,
    [ServciosOrganizaciones.guarderia, ServciosOrganizaciones.entrenamiento],
    [ActividadesOrganizaciones.colecta, ActividadesOrganizaciones.visitas]
  ),
  new Organizacion(
    "WoofHaven",
    "Refugio para perros en busca de un hogar",
    "Calle Esperanza, Ciudad",
    "Martes a viernes de 9:00 AM a 6:00 PM",
    "222-333-444",
    "persistencia/organizacion/imagenes/1.png",
    true,
    [ServciosOrganizaciones.adopcion, ServciosOrganizaciones.veterinario],
    [
      ActividadesOrganizaciones.capacitaciones,
      ActividadesOrganizaciones.visitas,
    ]
  ),
  new Organizacion(
    "FurryFriends",
    "Promoviendo la adopción de mascotas de todas las especies",
    "Avenida Amor, Ciudad",
    "Lunes a sábado de 10:00 AM a 5:00 PM",
    "666-777-888",
    "persistencia/organizacion/imagenes/1.png",
    false,
    [ServciosOrganizaciones.entrenamiento, ServciosOrganizaciones.guarderia],
    [
      ActividadesOrganizaciones.colecta,
      ActividadesOrganizaciones.capacitaciones,
    ]
  ),
];
