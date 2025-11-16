## 📚 API de Gestión de Libros

Este proyecto es una API REST construida con Node.js, Express y MongoDB (Mongoose) siguiendo una arquitectura MVC.
Permite gestionar un catálogo de libros mediante endpoints CRUD.

## 🚀 Tecnologías utilizadas

- Node.js
- Express (Para crear el servidor)
- TypeScript (Para tipar el código y prevenir errores)
- MongoDB + Mongoose(Para la base de datos)
- CORS (Para permitir el intercambio de informacion entre el front y el backend)
- Dotenv (Para ocultar los datos sensibles como la URI_DB y PORT)

## Estructura del proyecto.
Estructura del proyecto.

src/
├── config/
│   └── mongodb.ts         # Conexión a MongoDB
├── controllers/
│   └── bookController.ts  # Lógica de controladores
├── models/
│   └── bookModel.ts       # Modelo de Mongoose
├── routes/
│   └── bookRoutes.ts      # Rutas de /books
└── index.ts               # Servidor principal


# 🧪 Cómo usar la API localmente

Seguí estos pasos para ejecutar y probar la API en tu computadora:

## 1️⃣ Clonar el repositorio
git clone https://github.com/anyuescobar/tp-mvc-utn.git
cd tu-repo

## 2️⃣ Instalar dependencias
npm install

## 3️⃣ Configurar variables de entorno
Crear un archivo .env en la raíz del proyecto con:

PORT=2000
URI_DB=mongodb+srv://USUARIO:CONTRASEÑA@CLUSTER_URL/nombreBase

(Recordá reemplazar "tu_url_de_mongo" por tu conexión real a MongoDB.)

## 4️⃣ Iniciar el servidor en modo desarrollo
npm run dev

Esto levantará el servidor y deberías ver algo como:
Servidor en escucha en http://localhost:2000
Conectado a MongoDB

## 5️⃣ Probar la API
Yo utilicé Bruno.

### ✔️ Endpoints disponibles

Obtener todos los libros:
GET http://localhost:2000/books

Obtener un libro por ID:
GET http://localhost:2000/books/:id
Crear un libro:
POST http://localhost:2000/books
Actualizar un libro:
PATCH http://localhost:3000/books/:id
Eliminar un libro:
DELETE http://localhost:3000/books/:id

## 6️⃣ Ver datos en la base de datos
Podés revisar los datos:
- En MongoDB Atlas
- En MongoDB Compass
- O consultando:
GET http://localhost:2000/books

## 🎉 ¡Listo!
Ya se puede usar la API localmente.

## Cómo iniciar el proyecto:

1) Iniciar dependencias:
- npm install
2) Ejecutar en desarrollo:
- npm run dev
3) Complicar Typescript
- npm run build
4) Ejecutar la versión compilada:
- npm start

## Proyecto desarrollado para práctica de Express + MongoDB + TypeScript por María de los Ángeles Escobar.