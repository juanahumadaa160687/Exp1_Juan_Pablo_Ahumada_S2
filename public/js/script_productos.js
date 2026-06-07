localStorage.getItem('productos') && JSON.parse(localStorage.getItem('productos')).forEach((item) => {

    if (item.destacado === "true"){

        let div_destacados = document.getElementById('destacados');

        let div_producto = document.createElement('div');
        div_producto.classList.add('card', 'p-3');
        div_producto.style.width = '18rem';

        let img_producto = document.createElement('img');
        img_producto.src = "public/img/" + item.imagen;
        img_producto.classList.add('card-img-top');
        img_producto.alt = 'Imagen de ' + item.nombre;
        div_producto.appendChild(img_producto);

        let div_body = document.createElement('div');
        div_body.classList.add('card-body', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-column');
        div_producto.appendChild(div_body);

        let prod_title = document.createElement('h5');
        prod_title.classList.add('card-title', 'text-center');
        prod_title.innerText = item.nombre;
        div_body.appendChild(prod_title);

        let prod_categoria = document.createElement('p');
        prod_categoria.classList.add('card-text', 'text-center');
        prod_categoria.innerText = item.categoria;
        div_body.appendChild(prod_categoria);

        let prod_description = document.createElement('p');
        prod_description.classList.add('card-text', 'text-center');
        prod_description.innerText = item.descripcion;
        div_body.appendChild(prod_description);

        let prod_price = document.createElement('p');
        prod_price.classList.add('card-text', 'text-center');
        prod_price.innerText = "Precio: $" + item.precio;
        div_body.appendChild(prod_price);

        let prod_stock = document.createElement('p');
        prod_stock.classList.add('card-text', 'text-center', 'text-muted');
        prod_stock.innerText = "Stock: " + item.stock;
        div_body.appendChild(prod_stock);

        let button = document.createElement('button');
        button.classList.add('pt-2', 'pb-2');
        button.innerText = 'Comprar';
        button.type = 'button';
        button.addEventListener('click', () => {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(item);
            alert('Producto agregado al carrito');
            localStorage.setItem('carrito', JSON.stringify(carrito));
        })
        div_body.appendChild(button);

        div_destacados.appendChild(div_producto);

    }

});