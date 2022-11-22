let estrenos=[
    {
        nombre2:"El Menu",
        duracion2:120,
        poster2:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/estreno_el_menu.png?alt=media&token=5d3c1119-7cae-469f-b849-8468e915b9a8",
        sinopsis2:"Una joven pareja viaja a uno de los destinos más exclusivos del mundo para cenar en un restaurante que ofrece una experiencia culinaria única. Allí, el misterioso chef a cargo recibe a sus invitados con una extraña atmósfera y un menú de gastronomía molecular donde la comida se trata como arte conceptual. Pero su enfoque en la cocina tiene algunos ingredientes inesperados y sorpresas impactantes que sus invitados jamás imaginaron. De Searchlight Pictures, protagonizada por Anya Taylor-Joy, Nicholas Hoult y Ralph Fiennes.",
        banner2:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/banner_Historia_de_honor.webp?alt=media&token=c1c69b0f-35ff-4194-bc76-0f3f6231d4b8"
    },
    {
        nombre2:"Historia de honor",
        duracion2:120,
        poster2:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/estreno_historia_de_honor.png?alt=media&token=cb9a510f-2918-433c-b097-09ae76ff966e",
        sinopsis2:"En 1950, cuando la Guerra Fría amenaza la paz internacional, dos jóvenes pilotos de diferentes mundos son aceptados en un escuadrón de élite para su entrenamiento: uno es Tom Hudner (Glen Powell), un soldado impecable. El otro es Jesse Brown (Jonathan Majors), un piloto ferozmente talentoso, que se convertiría en el primer afroamericano en volar en combate para la Marina de los Estados Unidos. Iniciados juntos en el escuadrón VF-32, Tom y Jesse serán llevados al límite para convertirse en los mejores pilotos de combate. Dentro de la estrecha hermandad del escuadrón, Tom y Jesse formarán una firme amistad; la cual se pondrá a prueba en el acalorado campo de batalla.",
        banner2:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/banner_Historia_de_honor.webp?alt=media&token=c1c69b0f-35ff-4194-bc76-0f3f6231d4b8"
    },
    {
        nombre2:"La Maldicion",
        duracion2:120,
        poster2:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/estreno_la_maldicion.png?alt=media&token=16c0c695-a8d0-4a50-970e-100b39d8b7d6",
        sinopsis2:"Un misterioso caso de asesinato en serie tiene lugar por jaechaui (cadáveres que se han levantado de entre los muertos y pueden hablar). Estos cuerpos son manipulados por alguien.",
        banner2:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/banner_La_Maldicion.jpg?alt=media&token=6d74c27b-c98e-4120-9e96-879ce985485e"
    },
    {
        nombre2:"Louise",
        duracion2:120,
        poster2:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/estreno_louise.png?alt=media&token=dcfcb13d-a080-45b0-a86b-226e64f251c9",
        sinopsis2:"Cuando Myriam -madre de dos niños pequeños- decide volver a trabajar, a pesar de las quejas de su esposo, la pareja empieza a buscar una niñera. Contratan a Louise, quien rápidamente conquista el afecto de los niños pero, gradualmente, ocupará un lugar central en el hogar.  Una historia real que conmocionó al mundo. Basada en el bestseller de Leïla Slimani 'La Niñrea Perfecta'.",
        banner2:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/banner_Louise.jpg?alt=media&token=32f5d8ce-bbb3-4b83-8299-d777ac74bd60"
    },
    {
        nombre2:"Mar de Sangre",
        duracion2:120,
        poster2:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/estreno_mar_de_sangre.png?alt=media&token=849b8cdd-acb9-40c7-bcb8-b42beb3539a9",
        sinopsis2:"Un grupo de amigos roban un par de motos acuáticas pero terminan en un terrible accidente. En el mar y con un herido, tratarán de encontrar el camino de regreso a casa y de salvarse de la amenaza de los depredadores más temidos del océano.",
        banner2:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/banner_mar_de_sandre.jpg?alt=media&token=f96d93fd-178c-483d-af8d-655d54141051"
    },
    {
        nombre2:"UN mundo estraño",
        duracion2:120,
        poster2:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/estreno_un_mundo_extra%C3%B1o.jpg?alt=media&token=b0fef038-0a69-44f1-90b6-012b25fe70c4",
        sinopsis2:"UN MUNDO EXTRAÑO, la nueva película de Walt Disney Animation Studios, presenta un viaje de acción y aventura que transcurre en una tierra inexplorada y traicionera, donde criaturas fantásticas aguardan a los legendarios Clade, una familia de exploradores cuyas diferencias amenazan con derribar su última misión que es, por lejos, la más decisiva.",
        banner2:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/banner_UN_mundo_estra%C3%B1o.jpg?alt=media&token=2e732c66-9731-42fc-915a-1524c9c5d645"
    }
]

//creamoa una referencia al espacio html donde
//hacer el render (pintar etiquetas)
let etiquetaFila2=document.getElementById("fila2")


//SI YA TENGO DATOS QUE NORMALMENTE LLEGAN AL 
//FRONT COMO UN ARREGLO DE OBJETOS DEBEMOS RECORRER Y 
//DEPURAR DICHA INFORMACION
estrenos.forEach(function(estreno){
    //PARA PINTAR LA INFORMACION DE CADA PELICULA 
    //DEBEMOS APLICAR UNA TECNICA CONOCIDA COMO TRAVERSING
    //TRAVERSING=CREAR ETIQUETAS DE HTML DESDE JS
    let columna2=document.createElement("div")
    columna2.classList.add("col")

    let tarjeta2=document.createElement("div")
    tarjeta2.classList.add("card","h-100","shadow")

    let poster2=document.createElement("img")
    poster2.classList.add("img-fluid","w-100")
    poster2.src=estreno.poster2

    let nombre2=document.createElement("h3")
    nombre2.classList.add("text-center","fw-bold","fs-1")
    nombre2.textContent=estreno.nombre2

    let duracion2=document.createElement("h5")
    duracion2.classList.add("text-center")
    duracion2.textContent="Duracion " +estreno.duracion2+ " minutos"

    let sinopsis2=document.createElement("p")
    sinopsis2.classList.add("d-none")
    sinopsis2.textContent=estreno.sinopsis2

    let banner2=document.createElement("h1")
    banner2.classList.add("d-none")
    banner2.textContent=estreno.banner2

    //PADRES E HIJOS
    etiquetaFila2.appendChild(columna2)
    columna2.appendChild(tarjeta2)
    tarjeta2.appendChild(poster2)
    tarjeta2.appendChild(nombre2)
    tarjeta2.appendChild(duracion2)
    tarjeta2.appendChild(sinopsis2)
    tarjeta2.appendChild(banner2)

})

//Escuchando el evento de clic en alguna pelicula de la cartelera
let peliculaSeleccionada2={}
etiquetaFila2.addEventListener("click",function(evento2){
    if(evento2.target.classList.contains("img-fluid")){
       
       // obteniendo los datos de la pelicula
       peliculaSeleccionada2.imagen=evento2.target.parentElement.querySelector("img").src
       peliculaSeleccionada2.titulo=evento2.target.parentElement.querySelector("h3").textContent
       peliculaSeleccionada2.descripcion=evento2.target.parentElement.querySelector("h5").textContent
       peliculaSeleccionada2.sinopsis=evento2.target.parentElement.querySelector("p").textContent
       peliculaSeleccionada2.banner=evento2.target.parentElement.querySelector("h1").textContent

       //console.log(peliculaSeleccionada)
       //Enviando nuestros datos de la pelicula seleccionada a la memoria
       localStorage.setItem("pelicula",JSON.stringify(peliculaSeleccionada2))

        
       window.location.href="./src/views/verinfopelicula.html"
    }
})
