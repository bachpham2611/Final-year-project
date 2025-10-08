const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all transactions
router.get('/', async (req, res) => {
    try {
        const [transactions] = await db.query('SELECT * FROM transactions');
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create transaction - TEST VERSION
router.post('/', async (req, res) => {
    // First, let's see what we're receiving
    console.log('Request body:', req.body);
    console.log('Content-Type:', req.headers['content-type']);
    
    // Send it back to see
    res.json({ 
        received: req.body,
        contentType: req.headers['content-type']
    });
});

// Get transaction by ID
router.get('/:id', async (req, res) => {
    try {
        const [transactions] = await db.query(
            'SELECT * FROM transactions WHERE id = ?',
            [req.params.id]
        );
        
        if (transactions.length === 0) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        
        res.json(transactions[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update transaction
router.put('/:id', async (req, res) => {
    try {
        const { category_id, amount, type, description, date } = req.body;
        
        await db.query(
            'UPDATE transactions SET category_id = ?, amount = ?, type = ?, description = ?, date = ? WHERE id = ?',
            [category_id, amount, type, description, date, req.params.id]
        );
        
        res.json({ message: 'Transaction updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete transaction
router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM transactions WHERE id = ?', [req.params.id]);
        res.json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;