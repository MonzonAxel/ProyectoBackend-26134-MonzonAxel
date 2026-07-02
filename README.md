# ProyectoBackend-26134-MonzonAxel

API REST en Node.js con Express y Firebase como base de datos.

## Lo que hace la app

- Login con JWT
- Ver todos los productos
- Ver un producto por ID
- Crear un producto (requiere token)
- Editar un producto (requiere token)
- Eliminar un producto (requiere token)

## Instalacion

```bash
npm install
```

Crear un archivo `.env` en la raiz con estas variables:

```
PORT=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

## Uso

Iniciar el servidor:

```bash
npm run dev
```

## Endpoints sin AUTH

- GET  `/` 
- GET `/api/products` 
- GET `/api/products/:id` 

## Endpoints con AUTH

- POST `/api/auth/login` 
- POST `/api/products`
- PUT `/api/products/:id` 
- DELETE `/api/products/:id` 

Para los endpoints protegidos agregar el header:
```
Authorization: Bearer <token>
```

El token se obtiene haciendo POST a `/api/auth/login`.

## Test

```bash
npm test
```