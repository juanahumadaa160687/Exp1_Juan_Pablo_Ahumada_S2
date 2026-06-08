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

let admin_form = document.getElementById('admin_form');

let email_feedback = document.getElementById('email_feedback');
let username_feedback = document.getElementById('username_feedback');
let password_feedback = document.getElementById('password_feedback');
let confirm_password_feedback = document.getElementById('confirm_password_feedback');

admin_form.addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('emailInput').value.trim();
    let username = document.getElementById('usernameInput').value.trim();
    let password = document.getElementById('passwordInput').value.trim();
    let confirmPassword = document.getElementById('confirmPasswordInput').value.trim();

    if (password !== confirmPassword) {
        confirm_password_feedback.style.display = 'block';
        confirm_password_feedback.innerText = 'Las contraseñas no coinciden';

        setTimeout(function () {
            confirm_password_feedback.style.display = 'none';
        }, 3500)
    }
    else if (email === '') {
        email_feedback.style.display = 'block';
        email_feedback.innerText = 'E-mail no puede estar vacío';

        setTimeout(function () {
            email_feedback.style.display = 'none';

        }, 3500)
    }
    else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) || password === '') {
        password_feedback.style.display = 'block';
        password_feedback.innerText = 'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales (@$!%*?&)';

        setTimeout(function () {
            email_feedback.style.display = 'none';
        }, 3500)
    }
    else if (username === '') {
        username_feedback.style.display = 'block';
        username_feedback.innerText = 'El nombre de usuario no puede estar vacío';

        setTimeout(function () {
            username_feedback.style.display = 'none';
        }, 3500)
    }
    else {
        let admins = JSON.parse(localStorage.getItem('admins')) || [];

        let admin = {
            email: email,
            username: username,
            password: password
        }

        admins.push(admin);
        localStorage.setItem('admins', JSON.stringify(admins));

        alert('Administrador agregado correctamente');

        window.location.href = "/ludus_arcanus_web/login.html";

    }
});