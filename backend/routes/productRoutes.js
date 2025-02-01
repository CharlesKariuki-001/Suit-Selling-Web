const express = require('express');
const router = express.Router();
const db = require('../database');

// Route to fetch all products (suits)
router.get('/products', (req, res) => {
    const query = 'SELECT * FROM products';  // Ensure you fetch all products
    db.all(query, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// Route to add a new product (suit)
router.post('/products', (req, res) => {
    const { name, price, description } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: 'Name and Price are required.' });
    }

    const query = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)';
    const values = [name, price, description];

    db.run(query, values, function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({
                message: 'Product added successfully',
                product: { id: this.lastID, name, price, description }
            });
        }
    });
});

module.exports = router;
