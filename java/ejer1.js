// Mostrar / ocultar resultado
function mostrar(id) {
    const el = document.getElementById(id);
    el.style.display = (el.style.display === "block") ? "none" : "block";
}

// Animación al aparecer (si usas la clase .animar)
const elementos = document.querySelectorAll(".animar");

function mostrarElementos() {
    const altura = window.innerHeight;
    elementos.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < altura - 50) el.classList.add("visible");
    });
}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);