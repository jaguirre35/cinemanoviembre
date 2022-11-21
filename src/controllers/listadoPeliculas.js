let peliculas=[
    {
        nombre:"Black Adam",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/Blackadam.jpg?alt=media&token=d4168a49-0d5d-4509-ab29-02a669b2acbd",
        sinopsis:"Unos arqueólogos liberan de su tumba a Black Adam, quien llevaba 5000 años preso tras haber recibido los poderes de los dioses. De nuevo entre los humanos, Black Adam se dispone a imponer su justicia, muy diferente a la del mundo en el que despertó."

    },
    {
        nombre:"La Mujer Rey",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/LAmUJERREYNUEVO.jpg?alt=media&token=db8abfb2-1f52-4fb4-b463-19083583743b",
        sinopsis:"En la década de 1820, en África, una unidad militar exclusivamente femenina del reino de Dahomey se prepara para luchar contra las tropas invasoras del Imperio de Oyo, cuyo propósito es esclavizar a la población conquistada."
    },
    {
        nombre:"Minions",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/minions2posternuevo.jpg?alt=media&token=dc7c97ca-ebb7-4342-b0c9-a9fd7b0f1af1",
        sinopsis:"Los minions, ingenuos y torpes ayudantes de villano, llevan buscando, desde el principio de los tiempos, un verdadero malhechor al que servir. A lo largo de una evolución de millones de años, los minions se han puesto al servicio de los amos más despreciables. Kevin, acompañado por el rebelde Stuart y el adorable Bob, emprende un emocionante viaje para conseguir una jefa a quien servir, la terrible Scarlet Overkill."
    },
    {
        nombre:"One Piace",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/ONEPIECE.jpg?alt=media&token=aad463f5-6813-4851-b3e9-501c43568b9f",
        sinopsis:"One Piece narra la historia de un joven llamado Monkey D. Luffy, que inspirado por su amigo pirata Shanks, comienza un viaje para alcanzar su sueño, ser el Rey de los piratas, para lo cual deberá encontrar el tesoro One Piece dejado por el anterior rey de los piratas Gol D. Roger."
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690",
        sinopsis:"Challa, rey de Wakanda, muere de una misteriosa enfermedad terminal que su hermana Shuri cree que podría haber sido curada por la hierba en forma de corazón. Por su parte, Shuri ha estado intentando recrear sintéticamente la hierba después de que fuera destruida por Killmonger,​ pero no tiene éxito."
    },
    {
        nombre: "La jauria",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/LAJAURIA.jpg?alt=media&token=a686c0be-5f9d-425e-9c09-47fc5cf395e1",
        sinopsis:"En un centro de rehabilitación experimental en medio de la selva, Eliú paga una sentencia por asesinato. Cuando su mejor amigo y cómplice es trasladado al mismo lugar, los jóvenes deberán reconstruir su crimen y enfrentar un pasado del que Eliú se quiere alejar. En medio de terapias y trabajos forzados, Eliú se enfrentará a la oscuridad de la naturaleza humana y tratará de escapar de la suya antes de que sea demasiado tarde."
    },
    {
        nombre: "Sonrie",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/SONRIE1.jpg?alt=media&token=5c5e35a7-d125-465d-9952-a008c0486c92",
        sinopsis:"Tras presencia el dramático incidente sufrido por un paciente, la Dra. Cotter empieza a experimentar hechos aterradores sin explicación aparente. A medida que el horror se adueña de su vida, comprende que la respuesta está en su propio pasado"
    },
    {
        nombre: "Los Reyes Del Mundo",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/LOSREYESDELMUNDO1.jpg?alt=media&token=8390ad93-0400-4db6-a3ad-4f2e482f2e70",
        sinopsis:"Un día todos los hombres se quedaron dormidos… Y los cercos de la tierra, ardieron” Rá (19), Culebro (16), Sere (14), Winny (12) Nano (13) cinco chicos de la calle de Medellín. Cinco reyes sin reino. En sus manos tienen unas viejas escrituras de una tierra heredada por Rá. Tras recibir una carta de la oficina de restitución de tierras del gobierno, notificando la devolución de los terrenos que le fueron arrebatados a su abuela, Rá decidirá emprender el viaje con sus amigos con la promesa de por fin cumplir un sueño: tener un lugar en el mundo donde ser libres, donde estar a salvo, donde construir su propio reino."
    },
    {
        nombre: "Erase una vez",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/ERASEUNAVEZ.jpg?alt=media&token=9c83c31d-4369-49be-a421-1d22b605b5e4",
        sinopsis:"Antes de entrar en el País de las Maravillas y convertirse en Pan, Alicia y Peter eran hermanos. Una tragedia familiar los obliga a elegir entre los mundos de fantasía que tanto los atraen y el bienestar de sus padres."
    },
    {
        nombre: "La noche del demonio",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/jeeppers.jpg?alt=media&token=bb7439cc-583f-47fa-a405-dd8c9d247892",
        sinopsis:"Laine y Chase acuden a un festival temático de horror. Allí, ella empieza a tener premoniciones que auguran el retorno de un monstruo alado que despierta cada 23 años sediento de sangre."
    }
]

//creamoa una referencia al espacio html donde
//hacer el render (pintar etiquetas)
let etiquetaFila=document.getElementById("fila")

//SI YA TENGO DATOS QUE NORMALMENTE LLEGAN AL 
//FRONT COMO UN ARREGLO DE OBJETOS DEBEMOS RECORRER Y 
//DEPURAR DICHA INFORMACION
peliculas.forEach(function(pelicula){
    //PARA PINTAR LA INFORMACION DE CADA PELICULA 
    //DEBEMOS APLICAR UNA TECNICA CONOCIDA COMO TRAVERSING
    //TRAVERSING=CREAR ETIQUETAS DE HTML DESDE JS
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let poster=document.createElement("img")
    poster.classList.add("img-fluid","w-100")
    poster.src=pelicula.poster

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center","fw-bold","fs-1")
    nombre.textContent=pelicula.nombre

    let duracion=document.createElement("h5")
    duracion.classList.add("text-center")
    duracion.textContent="Duracion " +pelicula.duracion+ " minutos"

    let sinopsis=document.createElement("p")
    sinopsis.classList.add("d-none")
    sinopsis.textContent=pelicula.sinopsis

    //PADRES E HIJOS
    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(duracion)
    tarjeta.appendChild(sinopsis)
})

//Escuchando el evento de clic en alguna pelicula de la cartelera
let peliculaSeleccionada={}
etiquetaFila.addEventListener("click",function(evento){
    if(evento.target.classList.contains("img-fluid")){
       
       // obteniendo los datos de la pelicula
       peliculaSeleccionada.imagen=evento.target.parentElement.querySelector("img").src
       peliculaSeleccionada.titulo=evento.target.parentElement.querySelector("h3").textContent
       peliculaSeleccionada.descripcion=evento.target.parentElement.querySelector("h5").textContent
       peliculaSeleccionada.sinopsis=evento.target.parentElement.querySelector("p").textContent

       //console.log(peliculaSeleccionada)
       //Enviando nuestros datos de la pelicula seleccionada a la memoria
       localStorage.setItem("pelicula",JSON.stringify(peliculaSeleccionada))


       window.location.href="./src/views/verinfopelicula.html"
    }
})