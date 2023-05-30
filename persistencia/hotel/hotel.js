const zona = {
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
  constructor(direccion, cantidadDeEstrellas, precio, prestaciones, servicios, zona, habitaciones){

  }
}