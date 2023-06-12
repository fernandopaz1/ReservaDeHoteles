// forms para registrse o loguearse
const login_form = document.getElementById("loginForm");

// campos del login
const usuarioLogin = document.getElementById("inputLoginUsername");
const passwordLogin = document.getElementById("inputLoginPassword");

// warnings
const warningsLogin = document.getElementById("warningsLogin");

//redirect to registro
const redirectToRegistro = document.getElementById("redirectToRegistro");
const redirectToLogin = document.getElementById("redirectToLogin");

// campos registro
const inputLoginNombre = document.getElementById("inputLoginNombre");
const inputLoginApellido = document.getElementById("inputLoginApellido");
const inputLoginDNI = document.getElementById("inputLoginDNI");
const inputLoginEmail = document.getElementById("inputLoginEmail");
const inputLoginPasswordRep = document.getElementById("inputLoginPasswordRep");

// Edicion de usuario
const modal = document.getElementById("myModal");
const buttonGoToLogin = document.getElementById("buttonGoToLogin")

const medioDePagoContainer = document.getElementById("medioDePagoContainer")

const modalTarjeta = document.getElementById("myModalTarjeta");
const myModalMedioPagoDigital = document.getElementById("myModalMedioPagoDigital");

const agregarTarjetaBtn = document.getElementById("agregarTarjetaBtn")
const agregarMedioDigitalBtn = document.getElementById("agregarMedioDigitalBtn")

const closeMyModalTarjeta = document.getElementById("closeMyModalTarjeta")
const closeMyModalMedioPagoDigital = document.getElementById("closeMyModalMedioPagoDigital")


// modal de nueva tarjeta
const inputNombreTrjeta = document.getElementById("inputNombreTrjeta")
const inputFechaVencimientoNuevaTarjeta = document.getElementById("inputFechaVencimientoNuevaTarjeta")
const inputNumeroTarjeta = document.getElementById("inputNumeroTarjeta")

const errorNewtarjeta = document.getElementById("errorNewtarjeta")

const buttonSaveTarjeta = document.getElementById("buttonSaveTarjeta")

// modal de nuevo medio digital
const inputNombreMedioDigital = document.getElementById("inputNombreMedioDigital")
const inputEmailMedioDigital = document.getElementById("inputEmailMedioDigital")
const inputCVUMedioDigital = document.getElementById("inputCVUMedioDigital")

const buttonSaveMedioDigital = document.getElementById("buttonSaveMedioDigital")
const errorNewMedioDigital = document.getElementById("errorNewMedioDigital")


// hoteles
const selectRegion = document.getElementById("selectRegion")

const inputCantidadHuespedes = document.getElementById("inputCantidadHuespedes")
const inputIngreso = document.getElementById("inputIngreso")
const inputEgreso = document.getElementById("inputEgreso")

const buttonBuscarHoteles = document.getElementById("buttonBuscarHoteles")
const errorBusquedaHotel = document.getElementById("errorBusquedaHotel")

// Reserva
const selectMedioDePagoContainer = document.getElementById("selectMedioDePagoContainer") 
const selectTipoMedioDePago = document.getElementById("selectTipoMedioDePago")
const selectMedioDePago = document.getElementById("selectMedioDePago")