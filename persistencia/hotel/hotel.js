const Zona = {
  buenosAires: "Buenos Aires",
  litoral: "Litoral",
  noa: "Noroeste Argentino",
  cuyo: "Cuyo",
  centro: "Centro"
}

const CategoriaHabitacion = {
  a: "Categoria A",
  b: "Categoria B",
  c: "Categoria C"
}

const EstadoHabitacion = {
  ocupado: "Ocupado",
  libre: "Libre",
  enMantenimiento: "En Mantenimiento"
}


class Habitacion {
  constructor(numero, maximoHuespedes, precio, categoriaHabitacion, estado){
    this.numero = numero;
    this.maximoHuespedes = maximoHuespedes;
    this.precio = precio;
    this.categoriaHabitacion = categoriaHabitacion;
    this.estado = estado;
  }
}

class Calificacion {
  constructor(puntuacion, comentario){
    this.puntuacion = puntuacion;
    this.comentario = comentario;
  }
}

class Hotel {
  constructor(id, nombre,direccion, cantidadDeEstrellas, prestaciones, servicios, zona, habitaciones, img){
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.cantidadDeEstrellas = cantidadDeEstrellas;
    this.prestaciones =prestaciones
    this.servicios = servicios;
    this.zona = zona;
    this.habitaciones = habitaciones;
    this.img = img;
  }
}


let hoteles = [
  new Hotel(
    1, 
    "Hotel Budapest",
    "Calle Principal 123", 
    5, 
    ["Piscina", "Gimnasio"], 
    ["Desayuno incluido", "Wi-Fi gratis"], 
    Zona.buenosAires, 
    [ 
      new Habitacion(1, 2, 1000, CategoriaHabitacion.a, EstadoHabitacion.libre), 
      new Habitacion(2, 4, 2000, CategoriaHabitacion.b, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/1.jpg"
  ),
  new Hotel(
    2, 
    "Hotel California",
    "Avenida Central 456", 
    4, 
    ["Piscina", "Restaurante"], 
    ["Desayuno incluido", "Estacionamiento"], 
    Zona.litoral, 
    [ 
      new Habitacion(3, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre), 
      new Habitacion(4, 2, 1200, CategoriaHabitacion.a, EstadoHabitacion.libre),
      new Habitacion(5, 2, 1800, CategoriaHabitacion.b, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/2.jpg"
  ),
  new Hotel(
    3,
    "Hotel Budapest", 
    "Calle Secundaria 789", 
    3, 
    ["Piscina", "Bar"], 
    ["Desayuno incluido", "Servicio de habitaciones"], 
    Zona.noa, 
    [ 
      new Habitacion(6, 1, 800, CategoriaHabitacion.c, EstadoHabitacion.libre), 
      new Habitacion(7, 2, 1200, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(8, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/3.jpg"
  ),
  new Hotel(
    4, 
    "The Ritz-Carlton",
    "Avenida Principal 555", 
    2, 
    ["Piscina"], 
    ["Desayuno incluido", "Wi-Fi gratis"], 
    Zona.cuyo, 
    [ 
      new Habitacion(9, 2, 1000, CategoriaHabitacion.a, EstadoHabitacion.libre),
      new Habitacion(10, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(11, 1, 800, CategoriaHabitacion.c, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/4.jpg"
  ),
  new Hotel(
    5,
    "Four Seasons", 
    "Calle Central 789", 
    3, 
    ["Gimnasio"], 
    ["Desayuno incluido"], 
    Zona.centro, 
    [ 
      new Habitacion(12, 4, 2000, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(13, 2, 1200, CategoriaHabitacion.a, EstadoHabitacion.libre),
      new Habitacion(14, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/5.jpg"
  ),
  new Hotel(
    6,
    "Hilton", 
    "Avenida Principal 789", 
    4, 
    ["Piscina", "Restaurante"], 
    ["Desayuno incluido", "Estacionamiento"], 
    Zona.litoral, 
    [ 
      new Habitacion(15, 2, 1000, CategoriaHabitacion.a, EstadoHabitacion.libre), 
      new Habitacion(16, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(17, 2, 1200, CategoriaHabitacion.a, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/6.jpg"
  ),
  new Hotel(
    7,
    "Marriott", 
    "Calle Secundaria 987", 
    2, 
    ["Piscina", "Bar"], 
    ["Desayuno incluido", "Servicio de habitaciones"], 
    Zona.noa, 
    [ 
      new Habitacion(18, 1, 800, CategoriaHabitacion.c, EstadoHabitacion.libre), 
      new Habitacion(19, 2, 1200, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(20, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/7.jpg"
  ),
  new Hotel(
    8, 
    "Sheraton",
    "Avenida Central 789", 
    3, 
    ["Gimnasio"], 
    ["Desayuno incluido"], 
    Zona.centro, 
    [ 
      new Habitacion(21, 4, 2000, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(22, 2, 1200, CategoriaHabitacion.a, EstadoHabitacion.libre),
      new Habitacion(23, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/8.jpg"
  ),
  new Hotel(
    9, 
    "InterContinental",
    "Calle Principal 789", 
    4, 
    ["Piscina", "Restaurante"], 
    ["Desayuno incluido", "Estacionamiento"], 
    Zona.litoral, 
    [ 
      new Habitacion(24, 2, 1000, CategoriaHabitacion.a, EstadoHabitacion.libre), 
      new Habitacion(25, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(26, 2, 1200, CategoriaHabitacion.a, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/9.jpg"
  ),
  new Hotel(
    10,
    "Hyatt", 
    "Avenida Central 987", 
    2, 
    ["Piscina", "Bar"], 
    ["Desayuno incluido", "Servicio de habitaciones"], 
    Zona.noa, 
    [ 
      new Habitacion(27, 1, 800, CategoriaHabitacion.c, EstadoHabitacion.libre), 
      new Habitacion(28, 2, 1200, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(29, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/10.jpg"
  ),
  
  new Hotel(
    11,
    "Waldorf Astoria", 
    "Calle Secundaria 555", 
    3, 
    ["Piscina", "Bar"], 
    ["Desayuno incluido", "Wi-Fi gratis"], 
    Zona.noa, 
    [ 
      new Habitacion(30, 2, 1200, CategoriaHabitacion.a, EstadoHabitacion.libre), 
      new Habitacion(31, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(32, 1, 800, CategoriaHabitacion.c, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/11.jpg"
  ),
  new Hotel(
    12,
    "The Peninsula", 
    "Avenida Principal 555", 
    4, 
    ["Piscina", "Gimnasio"], 
    ["Desayuno incluido", "Estacionamiento"], 
    Zona.cuyo, 
    [ 
      new Habitacion(33, 2, 1000, CategoriaHabitacion.a, EstadoHabitacion.libre),
      new Habitacion(34, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(35, 2, 1200, CategoriaHabitacion.a, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/1.jpg"
  ),
  new Hotel(
    13,
    "St. Regis", 
    "Calle Central 555", 
    3, 
    ["Piscina", "Bar"], 
    ["Desayuno incluido", "Servicio de habitaciones"], 
    Zona.centro, 
    [ 
      new Habitacion(36, 1, 800, CategoriaHabitacion.c, EstadoHabitacion.libre), 
      new Habitacion(37, 2, 1200, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(38, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/12.jpg"
  ),
  new Hotel(
    14,
    "Mandarin Oriental", 
    "Avenida Principal 555", 
    2, 
    ["Piscina"], 
    ["Desayuno incluido", "Wi-Fi gratis"], 
    Zona.cuyo, 
    [ 
      new Habitacion(39, 2, 1000, CategoriaHabitacion.a, EstadoHabitacion.libre),
      new Habitacion(40, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(41, 1, 800, CategoriaHabitacion.c, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/13.jpg"
  ),
  new Hotel(
    15,
    "Fairmont", 
    "Calle Central 789", 
    3, 
    ["Gimnasio"], 
    ["Desayuno incluido"], 
    Zona.centro, 
    [ 
      new Habitacion(42, 4, 2000, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(43, 2, 1200, CategoriaHabitacion.a, EstadoHabitacion.libre),
      new Habitacion(44, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/14.jpg"
  ),
  new Hotel(
    16,
    "Raffles", 
    "Avenida Principal 789", 
    4, 
    ["Piscina", "Restaurante"], 
    ["Desayuno incluido", "Estacionamiento"], 
    Zona.litoral, 
    [ 
      new Habitacion(45, 2, 1000, CategoriaHabitacion.a, EstadoHabitacion.libre), 
      new Habitacion(46, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(47, 2, 1200, CategoriaHabitacion.a, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/15.jpg"
  ),
  new Hotel(
    17,
    "The Plaza", 
    "Calle Secundaria 987", 
    2, 
    ["Piscina", "Bar"], 
    ["Desayuno incluido", "Servicio de habitaciones"], 
    Zona.noa, 
    [ 
      new Habitacion(48, 1, 800, CategoriaHabitacion.c, EstadoHabitacion.libre), 
      new Habitacion(49, 2, 1200, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(50, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/16.jpg"
  ),
  new Hotel(
    18,
    "The Savoy", 
    "Avenida Central 789", 
    3, 
    ["Gimnasio"], 
    ["Desayuno incluido"], 
    Zona.centro, 
    [ 
      new Habitacion(51, 4, 2000, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(52, 2, 1200, CategoriaHabitacion.a, EstadoHabitacion.libre),
      new Habitacion(53, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/2.jpg"
  ),
  new Hotel(
    19,
    "Hotel Bel-Air", 
    "Calle Principal 789", 
    4, 
    ["Piscina", "Restaurante"], 
    ["Desayuno incluido", "Estacionamiento"], 
    Zona.litoral, 
    [ 
      new Habitacion(54, 2, 1000, CategoriaHabitacion.a, EstadoHabitacion.libre), 
      new Habitacion(55, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(56, 2, 1200, CategoriaHabitacion.a, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/3.jpg"
  ),
  new Hotel(
    20,
    "The Dorchester", 
    "Avenida Central 987", 
    2, 
    ["Piscina", "Bar"], 
    ["Desayuno incluido", "Servicio de habitaciones"], 
    Zona.noa, 
    [ 
      new Habitacion(57, 1, 800, CategoriaHabitacion.c, EstadoHabitacion.libre), 
      new Habitacion(58, 2, 1200, CategoriaHabitacion.b, EstadoHabitacion.libre),
      new Habitacion(59, 3, 1500, CategoriaHabitacion.b, EstadoHabitacion.libre)
    ],
    "persistencia/hotel/imagenes/4.jpg"
  )

];
