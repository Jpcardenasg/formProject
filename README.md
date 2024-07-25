# User Data Form Project
Este proyecto implementa un formulario para recibir datos de usuario y almacenarlos en una base de datos PostgreSQL a través de una API REST.

## Estructura del Proyecto
El proyecto está organizado utilizando Hexagonal Architecture y Vertical Slicing:

```css
proyecto/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   ├── com.mycompany.userdataform/
│   │   │   │   │   ├── application/
│   │   │   │   │   │   ├── UserService.java
│   │   │   │   │   │   └── UserServiceImpl.java
│   │   │   │   │   ├── domain/
│   │   │   │   │   │   └── models/
│   │   │   │   │   │       └── User.java
│   │   │   │   │   ├── infrastructure/
│   │   │   │   │   │   ├── in/
│   │   │   │   │   │   │   └── UserController.java
│   │   │   │   │   │   └── out/
│   │   │   │   │   │       └── UserRepository.java
│   │   │   │   └── resources/
│   │   │   │       └── application.properties
│   │   └── pom.xml
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── main.jsx
│   │   ├── UserFormApp.jsx
│   │   └── hooks/
│   │       └── useForm.js
└── README.md
```

# Configuración

## Backend (Spring Boot)
- **Base de Datos**: PostgreSQL
- **Configuración de la Base de Datos**:
    - **URL**: jdbc:postgresql://```<host>:<port>/<database>```
    - **Usuario**: postgres
    - **Contraseña**: ```<your_password>```

## Frontend (React)
- Librerías Utilizadas: React, Tailwind CSS

# Instalación y Uso
1. **Backend**:

    - Importa el proyecto Maven en tu IDE.
    - Asegúrate de tener configurada tu base de datos PostgreSQL y actualiza application.properties con los detalles correctos.
    - Ajusta la URL donde sirves el servidor Frontend para permitir el acceso en WebCofig.java

1. **Frontend**:

    - Instala las dependencias: npm install en la carpeta frontend.
    - Ejecuta la aplicación: npm start.


# Funcionalidades
- **Listar Usuarios**: Lista los usuarios creados en la base de datos.
- **Guardar Usuario**: Permite ingresar nombre, apellido y correo electrónico y guardar los datos en la base de datos.
- **Actualizar y Eliminar Usuario**: Estas funcionalidades están parcialmente implementadas en el backend.
