var map = L.map("map").setView([-34.5067, -58.7064], 14);

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
  maxZoom: 18,
}).addTo(map);

L.control.scale().addTo(map);

const drawer = Drawer();

const tipoPuntoMapa = {
  avisos: "aviso",
  organizacion: "organizacion",
  oraganizacionDestacada: "organización destacada",
};

const punto = (nombre, lat, long, descripcion, tipo) => {
  this.lat = lat;
  this.long = long;
  this.descripcion = descripcion;
  this.nombre = nombre;
  this.tipo = tipo;

  this.getLat = () => lat;
  this.getLong = () => long;
  this.getDescripcion = () => descripcion;
  this.getNombre = () => nombre;
  this.esComercio = () => tipo == "comercio";
  this.esEstacionamiento = () => tipo == "estacionamiento";
  this.esDeposito = () => tipo == "deposito";
  this.esMiAuto = () => tipo == "Estacionamiento activo";
  this.equals = (punto) => {
    return (
      this.getLat() == punto.getLat() &&
      this.getLong() == punto.getLong() &&
      this.getDescripcion() == punto.getDescipcion() &&
      this.getNombre() == punto.getNombre()
    );
  };

  return {
    getLat: getLat,
    getLong: getLong,
    getDescripcion,
    getNombre,
    equals,
    esComercio,
    esEstacionamiento,
    esDeposito,
    esMiAuto,
  };
};

let markerGroupOrganizaciones = L.markerClusterGroup({
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html: '<b class="leaflet-div-icon2">' + cluster.getChildCount() + "</b>",
    });
  },
});

function removeAllLayers() {}

function drawOrganizationInMap(organizations) {
  organizations.forEach((o) => {
    if (o.direccion.coordenadas === null) return;
    a = drawer.drawLocationInMap(
      punto(
        o.nombre,
        o.direccion.coordenadas[0],
        o.direccion.coordenadas[1],
        o.destacada
          ? tipoPuntoMapa.oraganizacionDestacada
          : tipoPuntoMapa.organizacion
      ),
      map
    );

    markerGroupOrganizaciones.addLayer(a);
    map.addLayer(markerGroupOrganizaciones);
  });
}
