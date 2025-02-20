const productos = [
    {
        nombre: "Aromo",
        descripcion: "Planta que proporciona sombra, de crecimiento rápido.",
        precio: 10, 
        imagen: "image/Aromo.jpg"
    },
    {
        nombre: "Castaña",
        descripcion: "Planta frutal y maderable, también conocida como almendra.",
        precio: 10,
        imagen: "image/Castaña.jpg"
    },
    {
        nombre: "Moringa",
        descripcion: "Planta medicinal, utilizada para tratar enfermedades respiratorias.",
        precio: 10,
        imagen: "image/Moringa.jpg"
    }
];

function renderProductos(productosArray) {
    const contenedor = document.getElementById('catalogo');
    contenedor.innerHTML = ''; 

    if (productosArray.length === 0) {
        contenedor.innerHTML = '<p>No se encontraron elementos</p>';
        return;
    }

    productosArray.forEach((producto, index) => {
        const productoId = `producto-${producto.nombre.toLowerCase().replace(/\s+/g, '-')}`; 
        const imagen = producto.imagen;

        const mensajeWhatsApp = `Hola, me gustaría comprar plantas de ${producto.nombre}`;
        const enlaceWhatsApp = `https://wa.me/59173999401?text=${encodeURIComponent(mensajeWhatsApp)}`;

        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.id = productoId;

        divProducto.innerHTML = `
            <img src="${imagen}" alt="${producto.nombre}" aria-label="Imagen de ${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p class="precio">Bs. ${producto.precio}</p>
            <a href="${enlaceWhatsApp}" target="_blank">
                <button class="pedir-btn">Pedir</button>
            </a>
        `;

        contenedor.appendChild(divProducto);
    });
}

function filtrarProductos() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();  
    const productosEncontrados = productos.filter(producto => {
        return producto.nombre.toLowerCase().includes(searchInput); 
    });

    renderProductos(productosEncontrados);
}

window.onload = () => {
    renderProductos(productos); 
    document.getElementById('searchInput').addEventListener('input', filtrarProductos); 
};
