let peliculas=[
    {
        nombre: "NOPE",
        genero: "Drama, Ciencia Ficción",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/NOPE.jpg?alt=media&token=89f35075-5fd3-4767-86cf-4cb8d3ac3f5b",
        sipnosis:"Los cuidadores de un rancho de caballos de California se cruzan con una fuerza misteriosa que afecta el comportamiento humano y animal.",
        clasificación:"General",   //general - +18
        idioma:"Español latino, Inglés",
        director: "Gabriel Lopez",
        actores:["Ana de Armas","John Milton","Juan Osorio"]

    },
    {
        nombre: "MAVERICK",
        genero: "Accion, Tiros",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/Top_Gun_Maverick-686232643-large.jpg?alt=media&token=6a1a6e2f-9dd8-43d2-bd34-109a8443b808",
        sipnosis:"Tras más de 30 años de servicio como uno de los mejores aviadores de la Armada, Pete Maverick Mitchel se encuentra dónde siempre quiso estar, empujando los límites como un valiente piloto de prueba.",
        clasificación:"General",   //general - +18
        idioma:"Inglés",
        director: "Pablo Orquesta",
        actores:["Karlee Karlee","Jack Killer","Viego King"]
    },
    {
        nombre: "Tres mil años esperandote",
        genero: "Accion",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/TresMilAnosEsperandote_Poster_209__1_.jpg?alt=media&token=52b16d20-0819-4d25-ac7c-dc033cbbcd23",
        sipnosis:"La Dra. en literatura Alithea Binnie (Tilda Swinton) parece estar feliz con su vida aunque se enfrenta al mundo con cierto escepticismo",
        clasificación:"General",   //general - +18
        idioma:"Inglés, Español",
        director: "Maurice Onion",
        actores:["Sister Daughter","Alexis Teen","Mia Cian"]
    },
    {
        nombre: "Witch Hunt",
        genero: "Accion, Terror",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/WITCH%20HUUNT.webp?alt=media&token=f52f23a9-a395-4efd-835a-421482d9a464",
        sipnosis:"Cacería de Brujas está situada en un Estados Unidos moderno en el que las brujas son reales y la brujería es ilegal, una adolescente debe enfrentarse a sus propios demonios y prejuicios mientras ayuda a dos brujas a evitar a las fuerzas de la autoridad y a cruzar la frontera sur para refugiarse en México.",
        clasificación:"+18",   //general - +18
        idioma:"Inglés",
        director: "John Hanck",
        actores:["Heisenberg Miller","Vanessa Red","Juan Blue"]
    },
    {
        nombre: "WYRMWOOD",
        genero: "Terror, Accion",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/ZOMBIE.jpg?alt=media&token=b5f8f99d-9410-4c87-b4ff-92bedacf2e02",
        sipnosis:"La vida de Barry da un giro radical cuando su hermana, Brooke, es secuestrada por un científico loco, justo en el momento en que se desencadena un apocalipsis zombi. Buscando aliados entre los supervivientes, Barry atravesará Australia para rescatarla.",
        clasificación:"+18",   //general - +18
        idioma:"Español, Inglés",
        director: "Jack Hanson",
        actores:["Robert Patinson","John White","Santiago Jill"]
    }
]



let fila=document.getElementById("fila")


peliculas.forEach(function(pelicula){             //dentro de la funcion siempre va el arreglo en singular
    //console.log (pelicula)
    console.log (pelicula.nombre)
    console.log (pelicula.genero)
    console.log (pelicula.duracion)
    console.log (pelicula.poster)
    console.log (pelicula.sipnosis)
    console.log (pelicula.clasificación)
    console.log (pelicula.idioma)
    console.log (pelicula.actores)


//1. Creamos una  collumna para cada pelicula

   let columna = document.createElement("div")
   columna.classList.add("col")

   //2. Creamos una tarjeta para cada pelicula

   let tarjeta = document.createElement("div")
   tarjeta.classList.add("card","h-100")

   //3. Creamos una foto para cada pelicula
   let poster = document.createElement("img")
   poster.classList.add("card-img-top","h-100")
   poster.src=pelicula.poster

   //4.Creamos nombre de pelicula
   let nombre = document.createElement("h3")
   nombre.classList.add("card-title","text-center")
   nombre.textContent = pelicula.nombre

   //Creamos genero de cada pelicula
   let genero = document.createElement("h5")
   genero.classList.add("text-start")
   genero.textContent = "Genero: "+pelicula.genero //se puede concatenar

   //Creamos el idioma de cada pelicula
   let idioma = document.createElement("h5")
   idioma.classList.add()
   idioma.textContent = "Idioma:       "+pelicula.idioma

   //Creamos el director de cada pelicula
   let director = document.createElement("h5")
   director.classList.add()
   director.textContent = "Director: "+pelicula.director

   //creamos los actores
   let actores = document.createElement("h5")
   actores.classList.add()
   actores.textContent = "Actores: "+pelicula.actores
   
   //Creamos la sipnosis
   let sinopsis = document.createElement("h6")
   sinopsis.classList.add("text-size-4px")//libreria bootstrap para ocultar el contenido
   sinopsis.textContent=pelicula.sipnosis


   //padres h hijos
   tarjeta.appendChild(poster)
   tarjeta.appendChild(nombre)
   tarjeta.appendChild(genero)
   tarjeta.appendChild(idioma)
   tarjeta.appendChild(director)
   tarjeta.appendChild(actores)
   tarjeta.appendChild(sinopsis)
   

   columna.appendChild(tarjeta)
   fila.appendChild(columna)
    
})