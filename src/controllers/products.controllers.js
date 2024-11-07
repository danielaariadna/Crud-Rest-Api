import connectDB from "../database/connections.js";
import sql from 'mssql';

 export const getProducts = async (req, res) => {
    const pool = await connectDB()
    const result = await pool.request().query('SELECT * FROM products')
    res.json(result.recordset);
}

export const getProduct = async(req, res) => {
    const pool = await connectDB()
    const result = await pool
    .request()
    .input("id",  sql.Int, req.params.id)
    .query('SELECT * FROM products WHERE id = @id');

    // Verificar si el producto existe
    if (result.rowsAffected[0]=== 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.json(result.recordset[0]);
}

export const createProduct = async (req, res) => {
    const pool = await connectDB()
    const { name, price, quantity, description } = req.body;
    const result = await pool.request()
    .input('name', sql.VarChar, name)
    .input('price', sql.Decimal(10, 2), price)
    .input('quantity', sql.Int, quantity)
    .input('description', sql.Text, description)
    .query('INSERT INTO products (name, price, quantity, description) VALUES (@name, @price, @quantity, @description); SELECT SCOPE_IDENTITY() AS id');


    const newProduct = {
        id: result.recordset[0].id,
        name,
        price,
        quantity,
        description
      };
 
      return res.status(201).json(newProduct);  
  
}

export const updateProduct = async (req,res) => {
    const pool = await connectDB()
    const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .input("name", sql.VarChar(100), req.body.name)
    .input("price", sql.Decimal(10, 2), req.body.price)
    .input("quantity", sql.Int, req.body.quantity)
    .input("description", sql.Text, req.body.description)
    .query(' UPDATE products SET name = @name, price = @price, quantity = @quantity, description = @description WHERE id = @id');
    if (result.rowsAffected[0]=== 0) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      return res.json({message: "Producto actualizado"});


}

export const deleteProduct =  async (req,res) => {
    const pool = await connectDB()
    const result = await pool
    .request()
    .input("id",  sql.Int, req.params.id)
    .query('DELETE FROM products WHERE id = @id');

    // Verificar si el producto existe
    if (result.rowsAffected[0]=== 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.json({message: "Producto eliminado"});
}