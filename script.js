const productos = [
    {
        nombre: "Aromo",
        descripcion: "Planta que proporciona sombra, de crecimiento rápido.",
        precio: 10,  // Store prices as numbers
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
    contenedor.innerHTML = '';  // Clear the existing catalog

    if (productosArray.length === 0) {
        contenedor.innerHTML = '<p>No products found</p>';
        return;
    }

    productosArray.forEach((producto, index) => {
        const productoId = `producto-${producto.nombre.toLowerCase().replace(/\s+/g, '-')}`;  // Unique product ID based on name
        const imagen = producto.imagen || 'image/placeholder.jpg';  // Imagen de reemplazo si no existe

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

function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();  // Get the search query
    const filteredProducts = productos.filter(producto => {
        return producto.nombre.toLowerCase().includes(searchInput);  // Only filter by product name
    });

    // Load filtered products
    renderProductos(filteredProducts);
}

// Cargar los productos al cargar la página
window.onload = () => {
    renderProductos(productos);  // Initially load all products
    document.getElementById('searchInput').addEventListener('input', filterProducts);  // Event listener for search input
};
