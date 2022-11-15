let peliculas=[
    {
        nombre:"Black Adam",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/Blackadam.jpg?alt=media&token=d4168a49-0d5d-4509-ab29-02a669b2acbd"

    },
    {
        nombre:"La Mujer Rey",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/LAmUJERREYNUEVO.jpg?alt=media&token=db8abfb2-1f52-4fb4-b463-19083583743b"
    },
    {
        nombre:"Minions",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/minions2posternuevo.jpg?alt=media&token=dc7c97ca-ebb7-4342-b0c9-a9fd7b0f1af1"
    },
    {
        nombre:"One Piace",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/ONEPIECE.jpg?alt=media&token=aad463f5-6813-4851-b3e9-501c43568b9f"
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690"
    },
    {
        nombre: "La jauria",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/LAJAURIA.jpg?alt=media&token=a686c0be-5f9d-425e-9c09-47fc5cf395e1"
    },
    {
        nombre: "Sonrie",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/SONRIE1.jpg?alt=media&token=5c5e35a7-d125-465d-9952-a008c0486c92"
    },
    {
        nombre: "Los Reyes Del Mundo",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/LOSREYESDELMUNDO1.jpg?alt=media&token=8390ad93-0400-4db6-a3ad-4f2e482f2e70"
    },
    {
        nombre: "Erase una vez",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/ERASEUNAVEZ.jpg?alt=media&token=9c83c31d-4369-49be-a421-1d22b605b5e4"
    },
    {
        nombre: "La reencarnacion del demonio",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/jeeppers.jpg?alt=media&token=bb7439cc-583f-47fa-a405-dd8c9d247892"
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

    let nombre=document.createElement("h1")
    nombre.classList.add("text-center","fw-bold","subrayado")
    nombre.textContent=pelicula.nombre

    let duracion=document.createElement("p")
    duracion.classList.add("text-center")
    duracion.textContent="Duracion " +pelicula.duracion+ " minutos"

    //PADRES E HIJOS
    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
})