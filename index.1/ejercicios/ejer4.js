function hora() {
    document.getElementById("hora").innerText =
        new Date().toLocaleTimeString();
}

function cambiarImagen() {
    const img = document.getElementById("img");
    img.src = (img.src.includes("perfil.jpg"))
        ? "../img/logo.png"
        : "../img/perfil.jpg";
}

function confirmarAccion() {
    const r = confirm("¿Deseas continuar?");
    alert(r ? "Continuando..." : "Cancelado");
}