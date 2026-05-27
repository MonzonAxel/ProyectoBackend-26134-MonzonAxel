# ProyectoBackend-26134-MonzonAxel

Proyecto en Node.js para probar comandos por consola usando la API de FakeStore.

## Lo que hace la APP hasta el momento

- Consultar todos los productos
- Consultar un producto por id
- Crear un producto
- Eliminar un producto

## Instalacion

1. Instalar dependencias del proyecto:

```bash
npm install
```

## Uso

El proyecto se ejecuta con:

```bash
npm run start <METODO> <RECURSO> [ARGUMENTOS]
```

Ejemplos:

```bash
npm run start GET products
npm run start GET products/15
npm run start POST products T-Shirt-Rex 300 remeras
npm run start DELETE products/7
```

Tambien se puede ejecutar directo con Node:

```bash
node index.js GET products
```