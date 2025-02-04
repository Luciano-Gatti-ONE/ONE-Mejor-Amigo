// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
const ingresoAmigos = document.querySelector('#amigo');
const botonAñadir = document.querySelector('.button-add');
const listaAmigos = document.querySelector("#listaAmigos");
const listaSorteado = document.querySelector("#resultado");

function agregarAmigo() {
    let texto = ingresoAmigos.value.trim();  // Trim quita espacios al inicio y al final

    if (texto !== "") {
        amigos.push(texto);  // Agregar a la lista si no está vacío
        ingresoAmigos.value = "";  // Limpiar el input
        actualizarLista();
    } else {
        console.log("No se puede agregar un nombre vacío.");
    }
}


function actualizarLista(){
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        let liAmigo = document.createElement("LI");
        let textAmigo = document.createElement("P");
        liAmigo.textContent = amigo;
        liAmigo.appendChild(textAmigo);
        listaAmigos.appendChild(liAmigo);
    });
}

function sortearAmigo(){
    listaSorteado.innerHTML = "";
    let seleccion = Math.floor(Math.random() * (amigos.length));
    if(seleccion < amigos.length){
        let liSeleccionado = document.createElement("LI");
        let pSeleccionado = document.createElement("P");
        pSeleccionado.textContent = "El/La ganador/a es: " + amigos[seleccion];
        liSeleccionado.appendChild(pSeleccionado);
        listaSorteado.appendChild(liSeleccionado);
        console.log(amigos[seleccion], amigos, seleccion)
    }else{
        console.log(seleccion);
    }

}
