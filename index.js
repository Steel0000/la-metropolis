const menuToggle = document.getElementById('abrir');
const body = document.body;

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    document.body.classList.add("noScroll");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
    body.classList.remove("noScroll");
})

document.getElementById("iniciarSesion").addEventListener("click", function() {
    var form = document.getElementById('formulario');
    form.classList.toggle('esconder');
});

var video = document.getElementById('gif');

video.addEventListener('ended', function() {
    video.currentTime = 0;
    video.play();
}) 
