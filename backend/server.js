const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const db = require('./database');
const userRoutes = require('./routes/userRoutes');

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Check if users table exists
db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='users'`, (err, row) => {
    if (err) {
        console.error("❌ Error checking users table:", err.message);
    } else if (!row) {
        console.error("❌ Users table does not exist!");
    } else {
        console.log("✅ Users table exists.");
    }
});

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Suit Selling Web API');
});

// Use user routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});