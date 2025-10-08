const express = require('express');
const router = express.Router();

// Register route
router.post('/register', (req, res) => {
    res.json({ message: 'Register route working' });
});

// Login route
router.post('/login', (req, res) => {
    res.json({ message: 'Login route working' });
});

// Logout route
router.post('/logout', (req, res) => {
    res.json({ message: 'Logout route working' });
});

module.exports = router;