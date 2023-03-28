const datos = {
    nombre:  "José",
    apellido: "Atay",
    edad: 35,
    altura: 179,
    eresDesarrollador: true
}
const edad = datos.edad
const lista = [
    {
        ...datos
    },{
        nombre: "Génova",
        apellido: "Velasquez",
        edad: 31,
        altura: 169,
        eresDesarrollador: false
    }, {
        nombre: "Francisco",
        apellido: "Nuñez",
        edad: 22,
        altura: 175,
        eresDesarrollador: false 
    }
]
const listaOrdenada = lista.sort((a,b) => b.edad - a.edad)
console.log(listaOrdenada)