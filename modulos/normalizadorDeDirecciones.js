class DireccionNormalizada {
  constructor(json) {
    this.altura = json.altura;
    this.cod_calle = json.cod_calle;
    this.cod_calle_cruce = json.cod_calle_cruce;
    this.cod_partido = json.cod_partido;
    this.coordenadas = json.coordenadas;
    this.direccion = json.direccion;
    this.nombre_calle = json.nombre_calle;
    this.nombre_calle_cruce = json.nombre_calle_cruce;
    this.nombre_localidad = json.nombre_localidad;
    this.nombre_partido = json.nombre_partido;
    this.tipo = json.tipo;
  }
}

const url = Config.url;

const normalizarDireccion = function (direccion) {
  callURL = url + "/?" + direccion;
  listaDirecciones = [];
  listaInfracciones.innerText = "";
  fetch(callURL)
    .then((res) => res.json())
    .then((data) => {
      listaDirecciones = data.direccionesNormalizadas.map(
        (dnJson) => new DireccionNormalizada(dnJson)
      );
    });
  return listaDirecciones;
};
