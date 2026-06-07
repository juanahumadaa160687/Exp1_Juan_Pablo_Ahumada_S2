let product_form = document.getElementById('product_form');

product_form.addEventListener('submit', function (event) {
    event.preventDefault();

    let id = document.getElementById('inputId').value.trim();
    let nombre = document.getElementById('productName').value.trim();
    let categoria = document.getElementById('productCategory').value.trim();
    let descripcion = document.getElementById('productDescription').value.trim();
    let precio = document.getElementById('productPrice').value.trim();
    let stock = document.getElementById('productStock').value.trim();
    let imagen = document.getElementById('productImage').value.trim();
    let destacado = document.getElementById('productFeatured').value.trim();

    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    let producto = {
        id: id,
        nombre: nombre,
        categoria: categoria,
        descripcion: descripcion,
        precio: precio,
        stock: stock,
        imagen: imagen,
        destacado: destacado,
    }

    productos.push(producto);

    if (dataSet.length > 0) {
        alert("Producto agregado correctamente");
        product_form.reset();
    }

    localStorage.setItem('productos', JSON.stringify(productos));
    window.location.reload();
});


let dataSet = JSON.parse(localStorage.getItem('productos')) || [];

let table = new DataTable('#productoTable', {
    paging: false,
    responsive: true,
    columns: [
        {title: 'ID'},
        {title: 'Nombre'},
        {title: 'Categoria'},
        {title: 'Descripcion'},
        {title: 'Precio'},
        {title: 'Stock'},
        {title: 'Acciones'},
    ],

    data:
        dataSet.map((item) => {
            return [
                item.id,
                item.nombre,
                item.categoria,
                item.descripcion,
                item.precio,
                item.stock,
                `<button class="btn btn-danger" id="bt_eliminar" onclick="deleteProd(${item.id})"><i class="fa fa-trash"></i></button>`,

            ]
        })

});

function deleteProd(id) {

    console.log(id);

    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    let producto = productos.find(p => p.id == id);

    console.log(producto);

    productos.splice(productos.indexOf(producto), 1);

    localStorage.setItem('productos', JSON.stringify(productos));

    alert("Producto eliminado correctamente");

    window.location.reload();

}
