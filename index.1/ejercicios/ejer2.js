let contadorValor = 0;

function contador() {
    contadorValor++;
    document.getElementById("cont").innerText = contadorValor;
}

function fecha() {
    const ahora = new Date();
    document.getElementById("fecha").innerText =
        ahora.toLocaleDateString() + " " + ahora.toLocaleTimeString();
}

function mostrar(id) {
    const el = document.getElementById(id);
    el.style.display = (el.style.display === "block") ? "none" : "block";
}