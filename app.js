// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    // console.log(nombre);
    if (nombre == 0) {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre);
        // console.log(amigos);
        limpiarInput();
    }
    return
}


function limpiarInput() {
    document.querySelector("#amigo").value = "";
    return
}

function actualizarTextoHTML(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML += `<li>${texto}</li>`
    return
}

function limpiarListaAmigos(){
     //limpia la lista de amigos antes de agregar nuevos
     let lista = document.getElementById("listaAmigos");
     lista.innerHTML = "";
     return
}

function listarAmigos() {
    limpiarListaAmigos();
    //itinerancia en cada elemento contenido en array
    for (let i of amigos) {
        actualizarTextoHTML("listaAmigos", i);
    }
    return
}

function sortearAmigo(){
    if(amigos != ""){
        i = Math.floor(Math.random()*amigos.length);
        let nombreSorteado = amigos[i];
        let resultado = document.getElementById("resultado")
        resultado.innerHTML = `<li> El amigo sorteado es ${nombreSorteado}</li>`;
        limpiarListaAmigos();
        
    } else{
        alert("La lista de amigos esta vacía");
    }
    return
}   