# Taskerly

Taskerly is a task management application that allows users to create, view, edit, and mark tasks as completed.

Features:<br>
• Editing: Existing tasks can be edited.<br>
• Status: Tasks can be marked as completed.<br>
• Viewing: Tasks are displayed in an organized table.<br>
• Task Creation: Users can add new tasks with a title and description.<br>

Technologies:<br>
• Backend: Node.js<br>
• Database: MySQL<br>
• Frontend: Angular<br>
• Libraries: Angular Material<br><br>

> [!NOTE]
>Prerequisites:<br>
>• Node.js (v16 or higher)<br>
>• Angular CLI (v18 or higher)<br>
>• MySQL (Recommended)<br>

<br>

> [!IMPORTANT]
>1. Clone Repository: git clone https://github.com/JoacoMongelos28/Taskerly.git
>2. Install backend dependencies:<br><br>
   cd Taskerly/api<br>
   npm install<br><br>
>3. Install frontend dependencies:<br><br>
   cd ../frontend<br>
   npm install<br><br>
>4. Set up environment variables:<br>
   Create a .env file in the api folder using the .env.example file.<br>
   DB_HOST=localhost<br>
   DB_PORT=your_port<br>
   DB_USER=your_user<br>
   DB_PASSWORD=your_password<br>
   DB_NAME=Taskerly<br><br>
>5. Create the Taskerly database with the following code:<br><br>
CREATE DATABASE Taskerly;<br><br>
USE Taskerly;<br><br>
CREATE TABLE Tarea (<br>
    id INT AUTO_INCREMENT PRIMARY KEY,<br>
    titulo VARCHAR(255) NOT NULL,<br>
    descripcion TEXT,<br>
    completada BOOLEAN DEFAULT FALSE<br>
);<br><br>
>6. Start the backend:<br>
   cd api<br>
   npm start<br><br>
>7. Start the frontend:<br>
   cd ../frontend<br>
   ng serve
