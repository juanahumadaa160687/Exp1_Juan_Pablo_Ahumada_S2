let carrito_prod = document.getElementById("productos_carrito");
let productos_total = document.getElementById("productos_total");
let limpiar_carrito = document.getElementById("btn_limpiar");

localStorage.getItem('carrito') && JSON.parse(localStorage.getItem('carrito')).forEach((item) => {

    let carro_productos = JSON.parse(localStorage.getItem('carrito'));

    let total = 0;

    carro_productos.forEach((producto) => {
        total += parseFloat(producto.precio);
    });

    let fila = document.createElement('tr');

    let producto_row = document.createElement("td");
    producto_row.scope = "col";
    producto_row.style.color = "var(--cffy-theme-primary-a40)";
    producto_row.innerText = item.nombre;
    fila.appendChild(producto_row);

    let precio_row = document.createElement("td");
    precio_row.scope = "col";
    precio_row.style.color = "var(--cffy-theme-primary-a40)";
    precio_row.innerText = "$" + item.precio;
    fila.appendChild(precio_row);

    let delete_producto = document.createElement("td");
    delete_producto.scope = "col";
    delete_producto.classList.add("d-flex", "justify-content-center", "align-items-center");
    let delete_button = document.createElement("button");
    delete_button.classList.add("btn", "btn-danger");
    delete_button.style.padding = "0px";
    delete_button.style.width = "50px";
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

    let blank = document.createElement("td");
    productos_total.appendChild(blank);

    let total_row = document.createElement("td")
    total_row.scope = "col";
    total_row.style.color = "var(--cffy-theme-primary-a40)";
    total_row.style.fontWeight = "bold";
    total_row.classList.add("d-flex", "align-items-center", "justify-content-end");
    total_row.innerText = "Total:";
    productos_total.appendChild(total_row);

    let valor_row = document.createElement("td");
    valor_row.scope = "col";
    valor_row.classList.add("text-center");
    valor_row.style.color = "var(--cffy-theme-primary-a40)";
    valor_row.innerText = "$" + total;
    productos_total.appendChild(valor_row);
});

limpiar_carrito.addEventListener('click', () => {
    alert("Carrito limpiado");
    localStorage.removeItem('carrito');
    window.location.href="index.html";
});