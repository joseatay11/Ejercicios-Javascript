const hoy = new Date()

const fechaNacimiento = new Date(1988, 9, 11)

const comparacion = hoy > fechaNacimiento

const diaNacimiento = fechaNacimiento.getDate()

const mesNacimiento = fechaNacimiento.getMonth() + 1

const añoNacimiento = fechaNacimiento.getFullYear()