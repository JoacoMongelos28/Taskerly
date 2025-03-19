# 📝✅ Taskerly

Taskerly is a task management application that allows users to create, view, edit, and mark tasks as completed.

## ✨ Features:<br>
• ✏️ **Editing:** Existing tasks can be edited.<br>
• ✅ **Status:** Tasks can be marked as completed.<br>
• 👀 **Viewing:** Tasks are displayed in an organized table.<br>
• ➕ **Task Creation:** Users can add new tasks with a title and description.<br>

## 💻 Technologies:<br>
• **Backend:** Node.js<br>
• **Database:** MySQL<br>
• **Frontend:** Angular<br>
• **Libraries:** Angular Material<br><br>

> [!NOTE]
> ## Prerequisites:<br>
>• **Node.js (v16 or higher)**<br>
>• **MySQL (Recommended)**<br>
>• **Angular CLI (v18 or higher)**<br>

<br>

> [!IMPORTANT]
> ## 🚀 How to install locally
> ### 1. Clone Repository:
> ```bash
> git clone https://github.com/JoacoMongelos28/Taskerly.git
> ```
> ### 2. Install backend dependencies:
> ```bash
> cd Taskerly/api
> npm install
> ```
> ### 3. Install frontend dependencies:
>  ```bash
> cd ../frontend
> npm install
> ```
> ### 4. Set up environment variables:
> **Create a .env file in the api folder using the .env.example file.**
> ```bash
> DB_HOST=localhost
> DB_PORT=your_port
> DB_USER=your_user
> DB_PASSWORD=your_password
> DB_NAME=Taskerly
> ```
> ### 5. Create the Taskerly database with the following code:
> ```bash
> CREATE DATABASE Taskerly;
>
> USE Taskerly;
> 
> CREATE TABLE Tarea (
>    id INT AUTO_INCREMENT PRIMARY KEY,
>    titulo VARCHAR(255) NOT NULL,
>    descripcion TEXT,
>    completada BOOLEAN DEFAULT FALSE
> );
> ```
> ### 6. Start the backend:
> ```bash
> cd api
> npm start
> ```
> ### 7. Start the frontend:
> ```bash
> cd ../frontend
> ng serve
>  ```
> ### 8. Enjoy the app!

<br>

> [!TIP]
> ## Endpoints:<br>
> **API:** http://localhost:3000/<br>
> **Browser:** http://localhost:4200

## 📫 Contact me
• 🌐 [Portfolio](https://joaquinmongelos.netlify.app/)<br>
• 💼 [LinkedIn - Joaquin Mongelos](https://www.linkedin.com/in/joaquinmongelos)<br>
• 📧 Email: joaquinmongelos75@gmail.com
