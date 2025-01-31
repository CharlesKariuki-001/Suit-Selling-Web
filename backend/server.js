const express = require('express');
const app = express();
const port = 3000;

//Middleware to parse JSON requests
app.use(express.json());

//Home route
app.get('/', (requestAnimationFrame, res) => {
    res.send('Welcome to the Suit selling Web API');
});

//Start the Server
app.listen(port, () => {
console.log(`server running on http://localhost:${port}`);
});

