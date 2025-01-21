const productos = [
    {
        nombre: "Aromo",
        descripcion: "Planta que proporciona sombra, de crecimiento rápido.",
        precio: "10",
        imagen: "image/Aromo.jpg"
    },
    {
        nombre: "Castaña",
        descripcion: "Planta frutal y maderable, también conocida como almendra.",
        precio: "10",
        imagen: "image/Castaña.jpg"
    },
    {
        nombre: "Moringa",
        descripcion: "Planta medicinal, utilizada para tratar enfermedades respiratorias.",
        precio: "10",
        imagen: "image/Moringa.jpg"
    }
];

function cargarProductos() {
    const contenedor = document.getElementById('catalogo');
    contenedor.innerHTML = ''; // Clear the existing catalog
    
    productos.forEach((producto, index) => {
        const productoId = `producto-${index + 1}`;
        const imagen = producto.imagen || 'image/placeholder.jpg';  // Imagen de reemplazo si no existe
        
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.id = productoId;
        
        const mensajeWhatsApp = `Hola, quiero comprar ${producto.nombre}`;
        const enlaceWhatsApp = `https://wa.me/59173999401?text=${encodeURIComponent(mensajeWhatsApp)}`;

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

// Filter function to search for products by name only
function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();  // Get the search query
    const filteredProducts = productos.filter(producto => {
        return producto.nombre.toLowerCase().includes(searchInput);  // Only filter by product name
    });

    // Load filtered products
    loadFilteredProducts(filteredProducts);
}

// Load the filtered products into the catalog
function loadFilteredProducts(filteredProducts) {
    const contenedor = document.getElementById('catalogo');
    contenedor.innerHTML = ''; // Clear the existing products

    filteredProducts.forEach((producto, index) => {
        const productoId = `producto-${index + 1}`;
        const imagen = producto.imagen || 'image/placeholder.jpg';  // Imagen de reemplazo si no existe
        
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.id = productoId;
        
        const mensajeWhatsApp = `Hola, quiero comprar ${producto.nombre}`;
        const enlaceWhatsApp = `https://wa.me/59173999401?text=${encodeURIComponent(mensajeWhatsApp)}`;

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

// Cargar los productos al cargar la página
window.onload = () => {
    cargarProductos();
    document.getElementById('searchInput').addEventListener('input', filterProducts);  // Event listener for search input
};
