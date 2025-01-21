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
}


function limpiarInput() {
    document.querySelector("#amigo").value = "";
}
