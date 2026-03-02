// Animación al hacer scroll
const elementos = document.querySelectorAll(".animar");

function mostrarElementos() {
    const alturaPantalla = window.innerHeight;

    elementos.forEach(el => {
        const posicion = el.getBoundingClientRect().top;
        if (posicion < alturaPantalla - 50) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);


// Menú hamburguesa
const botonMenu = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("activo");
});