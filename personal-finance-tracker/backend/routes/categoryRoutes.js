const express = require('express');
const router = express.Router();

// Get all categories
router.get('/', (req, res) => {
    res.json({ message: 'Get all categories' });
});

// Create category
router.post('/', (req, res) => {
    res.json({ message: 'Create category' });
});

// Update category
router.put('/:id', (req, res) => {
    res.json({ message: 'Update category' });
});

// Delete category
router.delete('/:id', (req, res) => {
    res.json({ message: 'Delete category' });
});

module.exports = router;