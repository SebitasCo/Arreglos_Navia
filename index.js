let libros = [
    {
      titulo: "El Principito",
      autor: "Antoine de Saint-Exupéry",
      genero: "Fábula",
      idioma: "Francés",
      precio: 15.99,
      formato: "Tapa blanda",
      isbn: "978-84-206-7260-2",
      descripcion: "La historia de un pequeño príncipe que viaja por diferentes planetas y aprende lecciones sobre la vida y el amor.",
      estado: "Nuevo",
      ubicacion: "Librería X, Ciudad Y",
      fecha_publicacion: "06/04/1943",
      editorial: "Gallimard",
      paginas: 96,
      dimensiones: {
        ancho: 12,
        profundidad: 1,
        altura: 18
      },
      peso: {
        valor: 150,
        unidad: "gramos"
      }
    },
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      genero: "Realismo mágico",
      idioma: "Español",
      precio: 19.99,
      formato: "Tapa dura",
      isbn: "978-84-376-0494-7",
      descripcion: "La historia de la familia Buendía a lo largo de varias generaciones en Macondo.",
      estado: "Usado",
      ubicacion: "Librería Z, Ciudad W",
      fecha_publicacion: "30/05/1967",
      editorial: "Gallimard",
      paginas: 432,
      dimensiones: {
        ancho: 15,
        profundidad: 3,
        altura: 22
      },
      peso: {
        valor: 300,
        unidad: "gramos"
      }
    },
    {
      titulo: "La Biblia",
      autor: "Dios (inspiración divina)",
      genero: "Religioso",
      idioma: "Varios idiomas",
      precio: 22, 
      formato: "Libro físico o digital",
      isbn: "No tiene ISBN",
      descripcion: "La Biblia es una colección de textos sagrados para el judaísmo y el cristianismo, que incluye escrituras consideradas divinas.",
      estado: "Nuevo",
      ubicacion: "Iglesias, librerías religiosas",
      fecha_publicacion: "Siglos antes de Cristo (para el Antiguo Testamento) y siglo I (para el Nuevo Testamento)",
      editorial: "Gallimard",
      paginas:234,
      dimensiones: {
        ancho: "Varía",
        profundidad: "Varía",
        altura: "Varía"
      },
      peso: {
        valor: "Varía",
        unidad: "gramos o kilogramos"
      }
      },
      {
        titulo: "La Odisea",
        autor: "Homero",
        genero: "Epopeya",
        idioma: "Griego antiguo",
        precio: 25, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La Odisea narra las aventuras del héroe griego Odiseo en su viaje de regreso a Ítaca tras la Guerra de Troya.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "Siglo VIII a.C.",
        editorial: "Gallimard",
        paginas:760,
        dimensiones: {
          ancho: "Varía",
          profundidad: "Varía",
          altura: "Varía"
        },
        peso: {
          valor: "Varía",
          unidad: "gramos o kilogramos"
        }
      },
      {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Novela",
        idioma: "Español",
        precio: 15, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La obra narra las aventuras de un hidalgo que enloquece leyendo libros de caballerías y decide convertirse en caballero andante.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "1605 y 1615",
        editorial: "Gallimard",
        paginas:468,
        dimensiones: {
          ancho: "Varía",
          profundidad: "Varía",
          altura: "Varía"
        },
        peso: {
          valor: "Varía",
          unidad: "gramos o kilogramos"
        }
      },
      {
        titulo: "Historia de dos ciudades",
        autor: "Charles Dickens",
        genero: "Novela histórica",
        idioma: "Inglés",
        precio: 40, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La novela se sitúa en la época de la Revolución Francesa y narra la historia de amor, venganza y redención entre personajes de Londres y París.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "1859",
        editorial: "Sudamericana",
        paginas:100,
        dimensiones: {
          ancho: "Varía",
          profundidad: "Varía",
          altura: "Varía"
        },
        peso: {
          valor: "Varía",
          unidad: "gramos o kilogramos"
        }
      },
      {
        titulo: "La Comunidad del Anillo",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía épica",
        idioma: "Inglés",
        precio: 30, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La primera parte de la trilogía narra la formación de la Comunidad del Anillo y su viaje para destruir el Anillo Único.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "1954",
        editorial: "Sudamericana",
        paginas:723,
        dimensiones: {
          ancho: "Varía",
          profundidad: "Varía",
          altura: "Varía"
        },
        peso: {
          valor: "Varía",
          unidad: "gramos o kilogramos"
        }
      },
      {
        titulo: "Las Dos Torres",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía épica",
        idioma: "Inglés",
        precio: 10, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La segunda parte de la trilogía sigue las aventuras de los miembros de la Comunidad del Anillo tras la separación en la primera parte.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "1954",
        editorial: "Sudamericana",
        paginas:418,
        dimensiones: {
          ancho: "Varía",
          profundidad: "Varía",
          altura: "Varía"
        },
        peso: {
          valor: "Varía",
          unidad: "gramos o kilogramos"
        }
      },
      {
        titulo: "El Retorno del Rey",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía épica",
        idioma: "Inglés",
        precio: 21, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La tercera parte de la trilogía narra la culminación de la guerra del Anillo y el destino de los personajes principales.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "1955",
        editorial: "Sudamericana",
        paginas:325,
        dimensiones: {
          ancho: "Varía",
          profundidad: "Varía",
          altura: "Varía"
        },
        peso: {
          valor: "Varía",
          unidad: "gramos o kilogramos"
        }
      },
      {
        titulo: "Culpa Mía",
        autor: "Mercedes Ron",
        genero: "Romance juvenil",
        idioma: "Español",
        precio: 38, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La primera parte de la trilogía narra la historia de Abril, una joven que se enamora de Aarón, un chico problemático con un pasado oscuro.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "2016",
        editorial: "Sudamericana",
        paginas:123,
        dimensiones: {
          ancho: "Varía",
          profundidad: "Varía",
          altura: "Varía"
        },
        peso: {
          valor: "Varía",
          unidad: "gramos o kilogramos"
        }
      },
      {
        titulo: "Culpa Tuya",
        autor: "Mercedes Ron",
        genero: "Romance juvenil",
        idioma: "Español",
        precio: 44, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La segunda parte de la trilogía continúa la historia de Abril y Aarón, enfrentando nuevos desafíos y revelaciones sobre su relación.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "2016",
        editorial: "Montena",
        paginas:453,
        dimensiones: {
          ancho: "Varía",
          profundidad: "Varía",
          altura: "Varía"
        },
        peso: {
          valor: "Varía",
          unidad: "gramos o kilogramos"
        }
      },
      {
        titulo: "Culpa Nuestra",
        autor: "Mercedes Ron",
        genero: "Romance juvenil",
        idioma: "Español",
        precio: 33, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "La tercera parte de la trilogía concluye la historia de Abril y Aarón, mostrando cómo enfrentan su destino y sus sentimientos.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "2017",
        editorial: "Montena",
        paginas:987,
        dimensiones: {
          ancho: "Varía",
          profundidad: "Varía",
          altura: "Varía"
        },
        peso: {
          valor: "Varía",
          unidad: "gramos o kilogramos"
        }
      },
                                                                                 
      {
        titulo: "En Llamas",
        autor: "Suzanne Collins",
        genero: "Ciencia ficción, aventura",
        idioma: "Español",
        precio: 51, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "En la secuela, Katniss y Peeta se enfrentan a la ira del Capitolio después de ganar los Juegos del Hambre.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "2009",
        editorial: "Montena",
        paginas:631,
        dimensiones: {
          ancho: "Varía",
          profundidad: "Varía",
          altura: "Varía"
        },
        peso: {
          valor: "Varía",
          unidad: "gramos o kilogramos"
        }
      },
      {
        titulo: "Sinsajo",
        autor: "Suzanne Collins",
        genero: "Ciencia ficción, aventura",
        idioma: "Español",
        precio: 60, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "En la conclusión de la trilogía, Katniss se convierte en el símbolo de la rebelión contra el Capitolio.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "2010",
        editorial: "Montena",
        paginas:567,
        dimensiones: {
          ancho: "Varía",
          profundidad: "Varía",
          altura: "Varía"
        },
        peso: {
          valor: "Varía",
          unidad: "gramos o kilogramos"
        }
      },
      {
        titulo: "Balada de pájaros cantores y serpientes",
        autor: "Suzanne Collins",
        genero: "Ciencia ficción, aventura",
        idioma: "Español",
        precio: 55, 
        formato: "Libro físico o digital",
        isbn: "Varía dependiendo de la edición",
        descripcion: "Precuela que narra la historia del presidente Snow y los primeros Juegos del Hambre.",
        estado: "Nuevo",
        ubicacion: "Librerías",
        fecha_publicacion: "2020",
        editorial: "Montena",
        paginas:320,
        dimensiones: {
          ancho: "Varía",
          profundidad: "Varía",
          altura: "Varía"
        },
        peso: {
          valor: "Varía",
          unidad: "gramos o kilogramos"
        }
      },
      {
        titulo: "Heartstopper Vol. 1",
        autor: "Alice Oseman",
        genero: "Novela gráfica, Romance LGBT+",
        idioma: "Inglés",
        precio: 10.99,
        formato: "Tapa blanda",
        isbn: "9781444951387",
        descripcion: "La historia de Nick y Charlie, dos chicos que desarrollan una amistad que se convierte en algo más.",
        estado: "Nuevo",
        ubicacion: "Librería X",
        fecha_publicacion: "2018",
        editorial: "Montena",
        paginas: 288,
        dimensiones: "5.1 x 0.8 x 7.8 pulgadas",
        peso: "9.6 onzas"
      },
      {
        titulo: "Heartstopper Vol. 2",
        autor: "Alice Oseman",
        genero: "Novela gráfica, Romance LGBT+",
        idioma: "Inglés",
        precio: 12.99,
        formato: "Tapa blanda",
        isbn: "9781444951400",
        descripcion: "La continuación de la historia de Nick y Charlie mientras exploran su relación y su identidad.",
        estado: "Nuevo",
        ubicacion: "Librería Y",
        fecha_publicacion: "2019",
        editorial: "Hodder Children's Books",
        paginas: 320,
        dimensiones: "5.1 x 0.9 x 7.8 pulgadas",
        peso: "10.4 onzas"
      },
      {
        titulo: "Heartstopper Vol. 3",
        autor: "Alice Oseman",
        genero: "Novela gráfica, Romance LGBT+",
        idioma: "Inglés",
        precio: 14.99,
        formato: "Tapa blanda",
        isbn: "9781444951424",
        descripcion: "La saga de Nick y Charlie continúa, enfrentando nuevos desafíos y emociones en su relación.",
        estado: "Nuevo",
        ubicacion: "Librería Z",
        fecha_publicacion: "2020",
        editorial: "Hodder Children's Books",
        paginas: 352,
        dimensiones: "5.1 x 1 x 7.8 pulgadas",
        peso: "11.2 onzas"
      },

  ];
  


  let heartstopper4 = {
    titulo: "Heartstopper Vol. 4",
    autor: "Alice Oseman",
    genero: "Novela gráfica, Romance LGBT+",
    idioma: "Inglés",
    precio: 16.99,
    formato: "Tapa blanda",
    isbn: "9781444951448",
    descripcion: "La historia de Nick y Charlie continúa en esta cuarta entrega de la serie, explorando nuevos desafíos y emociones en su relación.",
    estado: "Nuevo",
    ubicacion: "Librería W",
    fecha_publicacion: "2021",
    editorial: "Hodder Children's Books",
    paginas: 384,
    dimensiones: "5.1 x 1.1 x 7.8 pulgadas",
    peso: "12.8 onzas"
  };


  libros.push(heartstopper4);
 // console.log(libros)
  



  libros.pop(5);
  //console.log(libros)




  libros.forEach((libro, index) => {
 //   console.log(`Libro ${index + 1}: ${libro.titulo}`);
});


const librosListados1 = libros.map(libro => {
  return {
   Titulo: libro.titulo,
   Genero: libro.genero,
   Editorial: libro.editorial, 
   isbn: libro.isbn }; });

   const librosListados2 = libros.map(libro => {
    return {
     Titulo: libro.titulo,
     Autor: libro.autor,
     Editorial: libro.editorial, 
     Dimensiones: libro.dimensiones }; });

    const librosListados3 = libros.map(libro => {
    return {
     Titulo: libro.titulo,
     Estado: libro.estado,
     Editorial: libro.editorial, 
     Peso: libro.peso }; });

    const librosListados4 = libros.map(libro => {
    return {
     Titulo: libro.titulo,
     Ubicacion: libro.ubicacion,
     Editorial: libro.editorial, 
     FechaPublicacion: libro.precio }; });

    const librosListados5 = libros.map(libro => {
    return {
     Titulo: libro.titulo,
     Peso: libro.peso,
   Editorial: libro.editorial, 
     Dimensiones: libro.dimensiones }; });

    const librosListados6 = libros.map(libro => {
    return {
     Titulo: libro.titulo,
     Estado: libro.estado,
     Editorial: libro.editorial, 
     Ubicacion: libro.ubicacion }; });

const librosListados7 = libros.map(libro => {
return {
Titulo: libro.titulo,
Descripcion: libro.descripcion,
Editorial: libro.editorial, 
Formato: libro.formato }; });

const librosListados8 = libros.map(libro => {
return {
Titulo: libro.titulo,
isbn: libro.isbn,
Editorial: libro.editorial, 
Precio: libro.precio }; });

const librosListados9 = libros.map(libro => {
return {
Titulo: libro.titulo,
Genero: libro.genero,
Editorial: libro.editorial, 
Descripcion: libro.descripcion }; });

  const librosListados10= libros.map(libro => {
  return {
    Titulo: libro.titulo,
    Idioma: libro.idioma,
    Editorial: libro.editorial, 
   Paginas: libro.paginas }; });

   const librosConDescuento = libros.map(libro => ({
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    precio: libro.precio,
    descuento: libro.precio * 0.2
  }));
  // console.log(librosConDescuento);
   
  const librosMasCaros = libros.filter(libro => libro.precio > 50);

   //console.table(librosMasCaros);


const LibroMasPaginas=libros.map(libro=>{
      return {
        titulo: libro.titulo,
         autor: libro.autor,
         editorial:libro.editorial,
        paginas:libro.paginas
    }})
    .filter(libro=>{
      return libro.paginas > 90
    })
    .sort((a,b )=> b.paginas-a.paginas);
  //console.table(LibroMasPaginas)




let pilaLibros = [];

function agregarLibro() {
  let titulo = prompt("Ingrese el título del libro:");
  let autor = prompt("Ingrese el autor del libro:");
  let genero = prompt("Ingrese el género del libro:");

  let nuevoLibro = {
      titulo: titulo,
      autor: autor,
      genero: genero
  };

  pilaLibros.push(nuevoLibro);
  console.log(`Se ha agregado el libro "${titulo}" a la pila.`);
}

function mostrarLibro() {
  if (pilaLibros.length > 0) {
    let libroAMostrar = pilaLibros[pilaLibros.length - 1]; 
    console.log("Detalles del libro:");
    console.log(`Título: ${libroAMostrar.titulo}`);
    console.log(`Autor: ${libroAMostrar.autor}`);
    console.log(`Género: ${libroAMostrar.genero}`);

} else {
    console.log("No hay libros para mostrar en la pila.");
}
}

function quitarLibro() {

    if (pilaLibros.length > 0) {
      let libroQuitado = pilaLibros.pop();
      console.log(`Se ha quitado el libro "${libroQuitado.titulo}" de la pila.`);
  } else {
      console.log("No hay libros para quitar en la pila.");
  }
}
function listarlibro() {
  const librosListados = libros.map(libro => {
     return {
      Titulo: libro.titulo,
      Autor: libro.autor,
      Editorial: libro.editorial, 
      Precio: libro.precio }; });
      console.log(librosListados);
}
function ResumenLibros() {
  const LibroMasPaginas=libros.map(libro=>{
    return {
      titulo: libro.titulo,
       autor: libro.autor,
       editorial:libro.editorial,
      paginas:libro.paginas
  }})
  .filter(libro=>{
    return libro.paginas > 90
  })
  .sort((a,b )=> b.paginas-a.paginas);
console.table(LibroMasPaginas)
}




function mostrarMenu() {
    console.log("----- Menú de Libros -----");
    console.log("1. Agregar libro");
    console.log("2. Mostrar libro");
    console.log("3. Quitar libro");
    console.log("4. Listar libro");
    console.log("5. Resumen libro");
    console.log("6. Salir");
}

let opcion = 0;

do {
    mostrarMenu();
    opcion = parseInt(prompt("Ingrese una opción:"));

    switch (opcion) {
        case 1:
            agregarLibro();
            break;
        case 2:
            mostrarLibro();
            break;
        case 3:
            quitarLibro();
            break;
            case 4:
              listarlibro();
              break;
              case 5:
                ResumenLibros();
                break;
        case 6:
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción no válida. Por favor, ingrese una opción válida.");
    }
} while (opcion !== 6); 



