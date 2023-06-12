const buscadorDeHoteles = (cantidadDeHuespedes, zona) => {
  if(!cantidadDeHuespedes && !zona) return hoteles
  return hoteles
          .filter(h => !zona || (h.zona === Zona[zona]))
          .filter(h => {
            return h.habitaciones.reduce((h, count) => {return h.estado === EstadoHabitacion.libre ? count + h.maximoHuespedes  : count}, 0) >= cantidadDeHuespedes
          })
}