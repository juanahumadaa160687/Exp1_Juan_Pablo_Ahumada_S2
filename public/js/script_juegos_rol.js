localStorage.getItem('productos') && JSON.parse(localStorage.getItem('productos')).forEach((item) => {

    if (item.categoria === "Juegos de Rol") {

        let div_juegos_rol = document.getElementById('juegos-rol');

        let div_producto = document.createElement('div');
        div_producto.classList.add('card', 'p-3');
        div_producto.style.width = '18rem';
        div_juegos_rol.appendChild(div_producto);

        let img_rol = document.createElement('img');
        img_rol.src = "public/img/" + item.imagen;
        img_rol.classList.add('card-img-top');
        img_rol.alt = 'Imagen de ' + item.nombre;
        div_producto.appendChild(img_rol);

        let div_body_rol = document.createElement('div');
        div_body_rol.classList.add('card-body', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-column');
        div_producto.appendChild(div_body_rol);

        let prod_title_rol = document.createElement('h5');
        prod_title_rol.classList.add('card-title', 'text-center');
        prod_title_rol.innerText = item.nombre;
        div_body_rol.appendChild(prod_title_rol);

        let description_rol = document.createElement('p');
        description_rol.classList.add('card-text', 'text-center');
        description_rol.innerText = item.descripcion;
        div_body_rol.appendChild(description_rol);

        let precio_rol = document.createElement('p');
        precio_rol.classList.add('card-text', 'text-center');
        precio_rol.innerText = "Precio: $" + item.precio;
        div_body_rol.appendChild(precio_rol);

        let stock_rol = document.createElement('p');
        stock_rol.classList.add('card-text', 'text-center', 'text-muted');
        stock_rol.innerText = "Stock: " + item.stock;
        div_body_rol.appendChild(stock_rol);

        let button_rol = document.createElement('button');
        button_rol.classList.add('pt-2', 'pb-2');
        button_rol.innerText = 'Comprar';
        button_rol.type = 'button';
        button_rol.addEventListener('click', () => {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(item);
            alert('Producto agregado al carrito');
            localStorage.setItem('carrito', JSON.stringify(carrito));
        })
        div_body_rol.appendChild(button_rol);

        div_juegos_rol.appendChild(div_producto);
    }

});