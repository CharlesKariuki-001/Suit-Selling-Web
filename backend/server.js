const express = require('express');
const app = express();
const port = 3000;
const productRoutes = require('./routes/productRoutes');

// Middleware to parse JSON requests
app.use(express.json());

// Use product routes for API endpoints
app.use('/api', productRoutes);  // Corrected to '/api' for routing to the products

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Suit selling Web API');
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
