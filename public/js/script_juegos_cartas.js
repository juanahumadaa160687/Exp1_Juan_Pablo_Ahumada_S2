localStorage.getItem('productos') && JSON.parse(localStorage.getItem('productos')).forEach((item) => {

    if (item.categoria === "Juegos de Cartas") {

        let div_juegos_cartas = document.getElementById('juegos-cartas');

        let div_producto = document.createElement('div');
        div_producto.classList.add('card', 'p-3');
        div_producto.style.width = '18rem';
        div_juegos_cartas.appendChild(div_producto);

        let img_product = document.createElement('img');
        img_product.src = "public/img/" + item.imagen;
        img_product.classList.add('card-img-top');
        img_product.alt = 'Imagen de ' + item.nombre;
        div_producto.appendChild(img_product);

        let div_body_card = document.createElement('div');
        div_body_card.classList.add('card-body', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-column');
        div_producto.appendChild(div_body_card);

        let card_title_prod = document.createElement('h5');
        card_title_prod.classList.add('card-title', 'text-center');
        card_title_prod.innerText = item.nombre;
        div_body_card.appendChild(card_title_prod);

        let description_product = document.createElement('p');
        description_product.classList.add('card-text', 'text-center');
        description_product.innerText = item.descripcion;
        div_body_card.appendChild(description_product);

        let precio_product = document.createElement('p');
        precio_product.classList.add('card-text', 'text-center');
        precio_product.innerText = "Precio: $" + item.precio;
        div_body_card.appendChild(precio_product);

        let stock_product = document.createElement('p');
        stock_product.classList.add('card-text', 'text-center', 'text-muted');
        stock_product.innerText = "Stock: " + item.stock;
        div_body_card.appendChild(stock_product);

        let button_buy = document.createElement('button');
        button_buy.classList.add('pt-2', 'pb-2');
        button_buy.innerText = 'Comprar';
        button_buy.type = 'button';
        button_buy.addEventListener('click', () => {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(item);
            alert('Producto agregado al carrito');
            localStorage.setItem('carrito', JSON.stringify(carrito));
        })
        div_body_card.appendChild(button_buy);

        div_juegos_cartas.appendChild(div_producto);

    }

});