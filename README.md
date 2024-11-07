# Crud-Rest-Api

Descripción
Este proyecto es una API RESTful construida con Node.js y SQL Server, diseñada para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos. La API permite interactuar con una tabla de productos, lo que te permitirá gestionar los productos de forma eficiente y sencilla.

Funcionalidades
Crear un producto: Permite agregar un nuevo producto a la base de datos.
Leer productos: Permite obtener una lista de todos los productos o consultar un producto específico por su ID.
Actualizar un producto: Permite modificar la información de un producto existente en la base de datos.
Eliminar un producto: Permite eliminar un producto de la base de datos por su ID.
Tecnologías utilizadas
Node.js: Entorno de ejecución para JavaScript en el servidor.
Express.js: Framework web para Node.js, utilizado para gestionar las rutas y middleware.
SQL Server: Sistema de gestión de bases de datos utilizado para almacenar los datos de la API.
mssql: Paquete de Node.js que permite interactuar con SQL Server.

Rutas disponibles

GET /products
Obtiene todos los productos de la base de datos.

GET /products/:id
Obtiene un producto específico por su ID.

POST /products
Crea un nuevo producto en la base de datos.

PUT /products/:id
Actualiza un producto existente por su ID.

DELETE /products/:id
Elimina un producto por su ID.
