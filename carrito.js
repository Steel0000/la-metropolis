// CARRITO: Mostrar productos y eliminar
document.addEventListener("DOMContentLoaded", function () {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const cuerpoTabla = document.getElementById("carrito-items");
  const totalSpan = document.getElementById("total-carrito");

  let total = 0;
  carrito.forEach(producto => {
    const fila = document.createElement("tr");
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td>${producto.cantidad}</td>
      <td>$${subtotal}</td>
      <td><button class="btnEliminar" data-nombre="${producto.nombre}">🗑️</button></td>
    `;
    cuerpoTabla.appendChild(fila);
  });

  totalSpan.textContent = `$${total}`;

  // Manejo de eliminar
  const botonesEliminar = document.querySelectorAll(".btnEliminar");
  botonesEliminar.forEach(btn => {
    btn.addEventListener("click", () => {
      const nombre = btn.dataset.nombre;
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito = carrito.filter(p => p.nombre !== nombre);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      location.reload();
    });
  });
});

const btnVaciar = document.querySelector('.btn-vaciar');
btnVaciar.addEventListener('click', () => {
  const confirmacion = confirm('¿Estás seguro de vaciar el carrito? 🗑️');
  if (confirmacion) {
    localStorage.removeItem('carrito');
    location.reload(); // recarga la página para actualizar la vista
  }
});