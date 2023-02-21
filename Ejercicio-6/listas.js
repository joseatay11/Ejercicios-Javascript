const listaCompra = ["Aceite", "Harina", "Leche", "Huevos", "Queso"]

listaCompra.push("Aceite de Girasol")
listaCompra.pop()

const listaPeliculas = [
    {titulo: "El Sexto Sentido", director: "M. Night Shyamalan", fecha: new Date(1999, 9, 1)},
    {titulo: "Toy Story 2", director: "John Lasseter", fecha: new Date(1999, 11, 25)},
    {titulo: "Rápidos y Furiosos 8", director: "F. Gary Gray", fecha: new Date(2017, 03, 17)}
]

const peliculasRecientes = listaPeliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

const director = listaPeliculas.map(pelicula => {
    return pelicula.director
})

const titulo = listaPeliculas.map(pelicula => {
    return pelicula.titulo
})

const directores_titulos = director.concat(titulo)
const directores_titulos_propagacion = [...director, ...titulo]
