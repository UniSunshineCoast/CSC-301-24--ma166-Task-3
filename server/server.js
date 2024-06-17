const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const connection = require('./db');
const config = require('./config.json');

const app = express();
const PORT = config.port || 9000;

app.use(bodyParser.json());
app.use(cors());

// Get all products
app.get('/api/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results['rows']);
  });
});

// Get product by Id
app.get('/api/products/:id', (req, res) => {
    let sql = 'SELECT * FROM products where id = ?';
    sql = mysql.format(sql, [req.params.id]);
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching product', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.json(results['rows'][0]);
    });
  });

// Insert new product 
app.post('/api/addProduct', (req, res) => {
  console.log(req.body)
  const { name, description, price, category, image } = req.body;
  let sql = 'INSERT INTO products (name, description, price, category, image_url) VALUES (?, ?, ?, ?, ?)';
  sql = mysql.format(sql, [name, description, price, category, image ]);
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error adding product:', err);
      res.status(500).send({'message':'Internal Server Error'});
      return;
    }
    console.log('Product added successfully:', result);
    res.status(201).send({'message':'Product added successfully!'});
  });
});

// Delete product by Id
app.delete('/api/product/:id', (req, res) => {
  let sql = 'DELETE FROM products where id = ?';
  sql = mysql.format(sql, [req.params.id]);
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error deleting product', err);
      res.status(500).send({'message':'Internal Server Error'});
      return;
    }
    res.status(201).send({'message':'Product deleted successfully!'});
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 