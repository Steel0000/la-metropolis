// MENÚ: Añadir productos al carrito
document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".btnAgregarCarrito");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const nombre = boton.dataset.nombre;
      const precio = parseInt(boton.dataset.precio);

      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      const productoExistente = carrito.find(p => p.nombre === nombre);

      if (productoExistente) {
        productoExistente.cantidad++;
      } else {
        carrito.push({ nombre, precio, cantidad: 1 });
      }

      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert(`${nombre} añadido al carrito 🛒`);
    });
  });
});