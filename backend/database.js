const sqlite3 = require('sqlite3').verbose();

//connect to SQLite database
const db = new sqlite3.Database('/database.db', (err) => {
    if (err) {
        console.error('Error opening database:',err.message);
    }else {
        console.log('connected to the SQLite database.');
    }
});

//create a table for products (suits)
db.run(`
    CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT
 )
     `);

     module.exports = db;