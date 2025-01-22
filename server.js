const express = require('express');
const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

const secret = 'mysecretkey'; // Tajný klíč pro JWT

// Funkce pro načtení uživatelského JSON souboru
const getUsers = () => {
    const data = fs.readFileSync('./src/data/users.json');
    return JSON.parse(data);
};

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Načtení uživatelů z JSON souboru
    const users = getUsers();

    // Najdeme uživatele podle emailu
    const user = users.find(u => u.email === email);

    if (!user) {
        return res.status(401).json({ message: 'User not found' });
    }

    // Ověření hesla
    if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    // Vytvoření JWT tokenu
    const payload = { email: user.email, role: user.role };
    const token = jwt.encode(payload, secret);

    res.json({ token, role: user.role });
});

// Spuštění serveru
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
