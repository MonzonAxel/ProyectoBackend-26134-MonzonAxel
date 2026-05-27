const URL_BASE = "https://fakestoreapi.com";

const [, , metodo, recurso, ...rest] = process.argv;

if (!metodo || !recurso) {
  console.error("Debes usar: npm run start <GET|POST|DELETE> <recurso> [argumentos...]");
  process.exit(1);
}

const [nombreRecurso, idRecurso] = recurso.split("/");

async function obtenerProductos() {
  const respuesta = await fetch(`${URL_BASE}/products`);
  const productos = await respuesta.json();
  console.log(productos);
}

async function obtenerProductoPorId(id) {
  const respuesta = await fetch(`${URL_BASE}/products/${id}`);
  const producto = await respuesta.json();
  console.log(producto);
}

async function crearProducto(argumentos) {
  const [title, price, category] = argumentos;

  if (!title || !price || !category) {
    console.error("Debes usar: npm run start POST products <title> <price> <category>");
    process.exit(1);
  }

  const nuevoProducto = {
    title,
    price: Number(price),
    category,
    description: "",
    image: "https://fakestoreapi.com/img/placeholder.jpg",
  };

  const respuesta = await fetch(`${URL_BASE}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoProducto),
  });

  const resultado = await respuesta.json();
  console.log(resultado);
}

async function eliminarProducto(id) {
  const respuesta = await fetch(`${URL_BASE}/products/${id}`, {
    method: "DELETE",
  });
  const resultado = await respuesta.json();
  console.log(resultado);
}

async function iniciar() {
  if (metodo === "GET" && nombreRecurso === "products") {
    if (idRecurso) {
      await obtenerProductoPorId(idRecurso);
    } else {
      await obtenerProductos();
    }
  } else if (metodo === "POST" && nombreRecurso === "products") {
    await crearProducto(rest);
  } else if (metodo === "DELETE" && nombreRecurso === "products") {
    if (!idRecurso) {
      console.error("Debes usar: npm run start DELETE products/<productId>");
      process.exit(1);
    }
    await eliminarProducto(idRecurso);
  } else {
    console.error(`El comando no es reconocido: ${metodo} ${recurso}`);
    process.exit(1);
  }
}

iniciar().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
