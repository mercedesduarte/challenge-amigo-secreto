const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();
    input.value = ""; 
}

function mostrarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; 

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Por favor, agrega al menos un amigo antes de sortear.");
        return;
    }

    const amigoAleatorio = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; 

    const liResultado = document.createElement("li");
    liResultado.textContent = `Tu amigo secreto es: ${amigoAleatorio}`;
    ulResultado.appendChild(liResultado);
}
