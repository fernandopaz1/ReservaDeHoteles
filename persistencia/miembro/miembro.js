class MedioDePago {
  constructor(nombreYApellido){
    this.nombre = nombreYApellido;
  }
}

class Tarjeta extends MedioDePago{
  constructor(nombreYApellido, numero, fechaVencimiento){
    super(nombreYApellido);
    this.numero = numero;
    this.fechaVencimiento = fechaVencimiento
  }
}

class BilleteraVirtual extends MedioDePago{
  constructor(nombreYApellido, cvu, email){
    super(nombreYApellido)
    this.cvu = cvu;
    this.email = email;
  }
}

class Miembro {
  constructor(nombre, apellido, dni, email, edad, nivel, usuario, password, mediosDePago) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.email = email;
    this.edad = edad;
    this.nivel = nivel;
    this.usuario = usuario;
    this.password = password;
    this.mediosDePago = mediosDePago;
  }
}

const miembros = [
  new Miembro(
    "Pedro",
    "González",
    "12345678",
    "pedro@email.com",
    30,
    "Avanzado",
    "pedro123",
    "password123",
    [
      new Tarjeta("Pedro González", "1234567890", "12/25"),
      new BilleteraVirtual("Pedro González", "9876543210", "pedro@email.com")
    ]
  ),
  new Miembro(
    "María",
    "López",
    "98765432",
    "maria@email.com",
    28,
    "Intermedio",
    "maria123",
    "password456",
    [
      new Tarjeta("María López", "0987654321", "10/24"),
      new BilleteraVirtual("María López", "0123456789", "maria@email.com")
    ]
  )
]

let storedString = localStorage.getItem("miembros")
let cuentas = JSON.parse(storedString);

if(!cuentas || !Array.isArray(cuentas)){
  
    const miembrosJsonString = JSON.stringify(miembros);
    
    localStorage.setItem("miembros", miembrosJsonString);

}
