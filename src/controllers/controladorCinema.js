let peliculas=[
    {
        nombre: "Avatar",
        genero: "Ciencia Ficcion",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/Avatar.jpg?alt=media&token=1e54cde8-4131-4767-87e5-521a49da7351",
        sipnosis:"En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados.",
        clasificación:"General",   //general - +18
        idioma:"Español latino",
        director: "Gabriel Lopez",
        actores:["Ana de Armas","John Milton","Juan Osorio"]

    },
    {
        nombre: "Doctor Strange",
        genero: "Accion, Superheroes",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/drstra.jpg?alt=media&token=db027306-836d-4530-ac5c-9dd3d589a0e6",
        sipnosis:"Después de sufrir un accidente, un brillante y arrogante cirujano busca rehabilitarse mediante técnicas alternativas",
        clasificación:"General",   //general - +18
        idioma:"Inglés",
        director: "Pablo Orquesta",
        actores:["Karlee Karlee","Jack Killer","Viego King"]
    },
    {
        nombre: "Batman",
        genero: "Accion",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/batman.jfif?alt=media&token=6f50153a-08ea-4ce5-80d8-d7d58f7d0195",
        sipnosis:"En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia",
        clasificación:"General",   //general - +18
        idioma:"Inglés, Español",
        director: "Maurice Onion",
        actores:["Sister Daughter","Alexis Teen","Mia Cian"]
    },
    {
        nombre: "DOOM",
        genero: "Accion, Terror",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/doom.jpg?alt=media&token=28e30e8c-d6c0-4f0e-8430-61b47dccf3b4",
        sipnosis:"Dos soldados utilizan artillería pesada para enfrentar a mutantes en un laboratorio de alta tecnología en Marte.",
        clasificación:"+18",   //general - +18
        idioma:"Inglés",
        director: "John Hanck",
        actores:["Heisenberg Miller","Vanessa Red","Juan Blue"]
    },
    {
        nombre: "Dracula",
        genero: "Terror, Accion",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/dracula.jpg?alt=media&token=257d1da3-2b28-48ba-9d8a-c56d1d3c38d0",
        sipnosis:"Antes de convertirse en un vampiro, el conde Drácula era el príncipe Vlad que, al enterarse de la muerte de su amada, vendió su alma al diablo.",
        clasificación:"+18",   //general - +18
        idioma:"Español, Inglés",
        director: "Jack Hanson",
        actores:["Robert Patinson","John White","Santiago Jill"]
    },
    {
        nombre: "It",
        genero: "Terror",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/it.jpg?alt=media&token=fb5e3a56-0e03-4f64-ae77-a6dc20ee3610",
        sipnosis:"Varios niños de una pequeña ciudad del estado de Maine se alían para combatir a una entidad diabólica que adopta la forma de un payaso y desde hace mucho tiempo emerge cada 27 años para saciarse de sangre infantil.",
        clasificación:"+18",   //general - +18
        idioma:"Español latino, Inglés",
        director: "Juan Florez",
        actores:["Sett Eigram","Sion LoL","Kovalski Kol"]
    },
    {
        nombre: "Joker",
        genero: "Accion, Superheroes, Comedia",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/joker.jpg?alt=media&token=1e126c32-fe4d-4aa7-bbed-e081df6aac20",
        sipnosis:"El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.",
        clasificación:"+18",   //general - +18
        idioma:"Subtitulada, Español, Inglés",
        director: "Sofia Blade",
        actores:["Sophie Bee","Walter White","Anakin"]
    },
    {
        nombre: "Sonic",
        genero: "Accion, Comedia, Animación",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/sonic.jpg?alt=media&token=92427627-fbc2-4646-a404-a200ceb846cc",
        sipnosis:"Sonic intenta navegar por las complejidades de la vida en la Tierra con su nuevo mejor amigo, un humano llamado Tom Wachowski. ",
        clasificación:"General",   //general - +18
        idioma:"Inglés, Español",
        director: "Anya Blade",
        actores:["Ana Smith","Adolf Kill","Chris Gray"]
    },
    {
        nombre: "DOOM 2",
        genero: "Accion, Terror",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/doom.webp?alt=media&token=8b1e6a61-fabb-4d58-a199-d293a564aaea",
        sipnosis:"Dos soldados utilizan artillería pesada para enfrentar a mutantes en un laboratorio de alta tecnología en Marte.",
        clasificación:"+18",   //general - +18
        idioma:"Inglés",
        director: "Antonio Mirella",
        actores:["Anian Miller","John Fall","Ryan Wild"]
    },
    {
        nombre: "Spider-Man",
        genero: "Superheroes,Accion,Ciencia Ficcion",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-a95f0.appspot.com/o/spidy.jpg?alt=media&token=bd0a25a3-0672-4e98-878b-95b99a8b9404",
        sipnosis:"sufre una terrible transformación cuando su traje se vuelve negro y libera su personalidad oscura y vengativa. Afrontará el mayor desafío de su vida al tener que redescubrir la humildad y compasión que lo hacen ser quien es: un héroe",
        clasificación:"General",   //general - +18
        idioma:"Español, Inglés",
        director: "Rodolfo Gutierrez",
        actores:["Ana de Armas "," Alexis Opa "," Ryan Ryan"]
    }
]
//console.log(peliculas)

//Recorriendo un arreglo desde JS

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