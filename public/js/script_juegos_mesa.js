localStorage.getItem('productos') && JSON.parse(localStorage.getItem('productos')).forEach((item) => {

    if (item.categoria === "Juegos de Mesa") {
        
        let div_juegos_mesa = document.getElementById('juegos-mesa');

        let div_producto = document.createElement('div');
        div_producto.classList.add('card', 'p-3');
        div_producto.style.width = '18rem';
        div_juegos_mesa.appendChild(div_producto);

        let img_prod = document.createElement('img');
        img_prod.src = "public/img/" + item.imagen;
        img_prod.classList.add('card-img-top');
        img_prod.alt = 'Imagen de ' + item.nombre;
        div_producto.appendChild(img_prod);

        let div_card_body = document.createElement('div');
        div_card_body.classList.add('card-body', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-column');
        div_producto.appendChild(div_card_body);

        let prod_card_title = document.createElement('h5');
        prod_card_title.classList.add('card-title', 'text-center');
        prod_card_title.innerText = item.nombre;
        div_card_body.appendChild(prod_card_title);

        let description_prod = document.createElement('p');
        description_prod.classList.add('card-text', 'text-center');
        description_prod.innerText = item.descripcion;
        div_card_body.appendChild(description_prod);

        let precio_prod = document.createElement('p');
        precio_prod.classList.add('card-text', 'text-center');
        precio_prod.innerText = "Precio: $" + item.precio;
        div_card_body.appendChild(precio_prod);

        let stock_prod = document.createElement('p');
        stock_prod.classList.add('card-text', 'text-center', 'text-muted');
        stock_prod.innerText = "Stock: " + item.stock;
        div_card_body.appendChild(stock_prod);

        let button_compra = document.createElement('button');
        button_compra.classList.add('pt-2', 'pb-2');
        button_compra.innerText = 'Comprar';
        button_compra.type = 'button';
        button_compra.addEventListener('click', () => {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(item);
            alert('Producto agregado al carrito');
            localStorage.setItem('carrito', JSON.stringify(carrito));
        })
        div_card_body.appendChild(button_compra);

        div_juegos_mesa.appendChild(div_producto);

    }

});