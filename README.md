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
src/
 ├── config/
 │    └── mongodb.ts        # Conexión a MongoDB
 ├── controllers/
 │    └── bookController.ts # Lógica de controladores
 ├── models/
 │    └── bookModel.ts      # Modelo de Mongoose
 ├── routes/
 │    └── bookRoutes.ts     # Rutas de /books
 └── index.ts               # Servidor principal

 ## Cómo iniciar el proyecto:

1) Iniciar dependencias:
- npm install
2) Ejecutar en desarrollo:
- npm run dev
3) Complicar Typescript
- npm run build
4) Ejecutar la versión compilada:
- npm start