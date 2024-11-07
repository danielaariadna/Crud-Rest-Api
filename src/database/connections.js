import sql from 'mssql';

const dbConfig = {
    server: "localhost",
    database: "node_restapi",
    user: "user",
    password: "noderestapi",
    options: {
        encrypt: false, 
        trustServerCertificate: true 
      }
};

// Función para conectar a la base de datos
async function connectDB() {
    try {
      const pool = await sql.connect(dbConfig);
      console.log('Conectado a SQL Server');
      return pool;
    } catch (error) {
      console.error('Error conectando a SQL Server:', error);
      throw error;
    }
  }
  
  export default connectDB;