function saludar() {
    const nombre = document.getElementById("nombre").value.trim();
    const salida = document.getElementById("saludo");
    salida.innerText = nombre ? "Hola " + nombre : "Escribe tu nombre";
}

function colorRandom() {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = color;
}

function mostrar(id) {
    const el = document.getElementById(id);
    el.style.display = (el.style.display === "block") ? "none" : "block";
}