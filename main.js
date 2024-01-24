const productos = [
    { id: 1, nombre: "Camara HD", precio: 2000 },
    { id: 2, nombre: "Mouse", precio: 5000 },
    { id: 3, nombre: "Teclado", precio: 2000 },
    { id: 4, nombre: "Monitor", precio: 18000 },
];

let carrito = [];                                               // [] significa que esta basio
let boton = document.getElementById("btn");

const agregarAlCarrito = (id) => {
const producto = productos.find((item) => item.id === id);

    if (producto) {
    carrito.push(producto);
    actualizarCarrito();
    } else {
    console.error("Producto no encontrado");
    }

    let cantidad = document.getElementById("cantidad");
    let inventario = JSON.parse(localStorage.getItem("carrito"));
    let i = 0;
    for (const articulo of inventario) {
        i++;
    }
    cantidad.innerText = i;
};

const actualizarCarrito = () => {
                                                                // se guarda los datos del carrito en localStorage
localStorage.setItem("carrito", JSON.stringify(carrito));
console.log(carrito);
};

productos.forEach((item) => {
let div = document.createElement("div");

                                                                //Se Agrega HTML
div.innerHTML = `
<h1>Id: ${item.id}</h1>
<p>Nombre: ${item.nombre}</p>
<b>$${item.precio}</b>
<button id="boton${item.id}">Seleccionar</button>
`;

document.body.append(div);


let botonProducto = document.getElementById(`boton${item.id}`);

botonProducto.addEventListener("click", () => agregarAlCarrito(item.id));
});

boton.addEventListener("click", () => {
carrito.forEach((item) => {
let div = document.createElement("div");

div.innerHTML = `
<h2>Id: ${item.id}</h2>
<p>Nombre: ${item.nombre}</p>
<b>$${item.precio}</b>
`;
document.body.append(div);
});
});