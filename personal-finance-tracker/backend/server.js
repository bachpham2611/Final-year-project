const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//Import database connection
const db = require('./config/db');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Finance Tracker API is running!' });
});

// Import routes (we'll create these next)
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/categories', categoryRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Test database connection
db.query('SELECT 1')
    .then(() => {
        console.log('✅ Database connected successfully');
    })
    .catch(err => {
        console.error('❌ Database connection failed:', err);
    });