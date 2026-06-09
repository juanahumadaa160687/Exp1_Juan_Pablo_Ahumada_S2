const formatoCLP = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
});

let carrito_prod = document.getElementById("productos_carrito");
let productos_total = document.getElementById("total_pagar");
let limpiar_carrito = document.getElementById("btn_limpiar");

let total = 0;

localStorage.getItem('carrito') && JSON.parse(localStorage.getItem('carrito')).forEach((item) => {

    let total_final = parseFloat(item.precio);
    total += total_final;

    let carro_productos = JSON.parse(localStorage.getItem('carrito'));

    let fila = document.createElement('tr');

    let producto_row = document.createElement("td");
    producto_row.scope = "row";
    producto_row.style.color = "var(--cffy-theme-primary-a40)";
    producto_row.innerText = item.nombre;
    fila.appendChild(producto_row);

    let precio_row = document.createElement("td");
    precio_row.style.color = "var(--cffy-theme-primary-a40)";
    precio_row.innerText = "$" + item.precio;
    fila.appendChild(precio_row);

    let delete_producto = document.createElement("td");
    delete_producto.classList.add("d-flex", "justify-content-center", "align-items-center");
    let delete_button = document.createElement("button");
    delete_button.classList.add("btn", "btn-danger");
    delete_button.style.padding = "0px";
    delete_button.style.width = "25%";
    delete_button.innerHTML = '<i class="fa fa-trash"></i>';
    delete_button.addEventListener('click', () => {
        alert("Producto eliminado del carrito");
        carro_productos.splice(carro_productos.indexOf(item), 1);
        localStorage.setItem('carrito', JSON.stringify(carro_productos));
        location.reload();
    })
    delete_producto.appendChild(delete_button);
    fila.appendChild(delete_producto);

    carrito_prod.appendChild(fila);

});

let total_prod = document.createElement("h5");
total_prod.classList.add("text-end");
total_prod.style.color = "var(--cffy-theme-primary-a40)";
total_prod.innerText = "Total: " + formatoCLP.format(total);
productos_total.appendChild(total_prod);


limpiar_carrito.addEventListener('click', () => {
    alert("Carrito vaciado");
    localStorage.removeItem('carrito');
    window.location.href="index.html";
});