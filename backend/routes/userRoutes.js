const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../database');
const router = express.Router();

// ✅ Register User
router.post('/register', async (req, res) => {
    const { fullname, email, password } = req.body;

    // Validate input fields
    if (!fullname || !email || !password) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    // Validate password length
    if (password.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters long.' });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into database
    db.run(
        `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        [fullname, email, hashedPassword],
        function (err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(400).json({ error: 'Email already exists!' });
                }
                return res.status(500).json({ error: 'Database error: ' + err.message });
            }
            res.status(201).json({
                message: 'User registered successfully!',
                userId: this.lastID,
            });
        }
    );
});

// ✅ Login User
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
        return res.status(400).json({ error: 'Both email and password are required!' });
    }

    // Fetch user from database
    db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Database error: ' + err.message });
        }
        if (!user) {
            return res.status(400).json({ error: 'User not found!' });
        }

        // Compare passwords
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid password!' });
        }

        // Return success response
        res.json({
            message: 'Login successful!',
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });
    });
});

module.exports = router;