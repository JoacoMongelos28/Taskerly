# TPFinalTaller2

Taskerly
Una aplicación para la gestión de tareas que permite a los usuarios crear, visualizar, editar y marcar tareas como completadas. La aplicación está desarrollada con Angular en el frontend y Node.js para la API en el backend.

Características
Creación de tareas: Los usuarios pueden añadir nuevas tareas con un título y descripción.
Visualización: Las tareas se muestran en una tabla organizada.
Edición: Es posible editar las tareas existentes.
Estado: Las tareas pueden marcarse como completadas.

Tecnologías Utilizadas
Frontend: Angular 18
Backend: Node.js
Base de Datos: MySQL
Librerías adicionales:
Angular Material

Instalación
Requisitos Previos
Node.js (v16 o superior)
Angular CLI (v18)
MySQL

Pasos para instalar

1. Clonar el repositorio:
   git clone https://github.com/brendiaz03/TPFinalTaller2.git
   cd TPFinalTaller2

2. Instalar dependencias del backend:
   cd api
   npm install

3. Instalar dependencias del frontend:
   cd ../frontend
   npm install

4. Configurar variables de entorno:
   Crear un archivo .env en la carpeta api con las siguientes variables:
   DB_HOST=localhost
   DB_PORT=
   DB_USER=
   DB_PASSWORD=
   DB_NAME=db_todoapp

5. Iniciar el backend:
   cd api
   npm start

6. Iniciar el frontend:
   cd ../frontend
   ng serve

Uso
Accede a la aplicación en tu navegador: http://localhost:4200
Usa las funcionalidades disponibles:
Añadir nuevas tareas.
Ver las tareas existentes en la tabla.
Editar tareas seleccionadas.
Marcar tareas como completadas.

API Endpoints
Base URL:
http://localhost:3000/

Método Endpoint Descripción
GET /tareas Obtiene todas las tareas.
POST /tareas Crea una nueva tarea.
PUT /tareas/:id Edita una tarea por su ID.
DELETE /tareas/:id Elimina una tarea por su ID.
