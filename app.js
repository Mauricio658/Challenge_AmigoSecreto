// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos= [];

function  agregarAmigo() {
    let nombreAmigoUsuario = document.getElementById('amigo').value.trim();

    if(document.querySelector('#amigo').value === '' || !isNaN(nombreAmigoUsuario)){
        alert("Por favor inserta un nombre valido");
        limpiarCaja();
    }else{
        listaAmigos.push(nombreAmigoUsuario);
        recorrerLista(); //Modificar lista
        limpiarCaja();
        //console.log(listaAmigos);
    }

}

function limpiarCaja() { //Funcion para limpiar el campo de texto
    document.querySelector('#amigo').value = ''; 
}

function recorrerLista() {
    let lista = document.getElementById('listaAmigos'); // Seleccionamos la lista donde se mostrarán los nombres
    lista.innerHTML = ""; // Limpiamos la lista antes de agregar nuevos elementos

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li'); // Creamos un nuevo elemento <li>
        li.textContent = listaAmigos[i]; // Asignamos el nombre del amigo
        lista.appendChild(li); // Agregamos el <li> a la lista
    }
}

function sortearAmigo() {
    if(listaAmigos.length < 2){
        alert("Debes agregar al menos 2 amigos");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Generar índice aleatorio
    //console.log(indiceAleatorio);
    let amigoSorteado = listaAmigos[indiceAleatorio]; // Obtener el nombre aleatorio

    // Mostrar el resultado en la lista de resultados
    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = `<li>${amigoSorteado} ha sido seleccionado!</li>`;

}