const express = require('express');
const router = express.Router();
const { getTransactions, createTransaction } = require('../controllers/transactionController');

// Define routes
router.get('/transactions', getTransactions);
router.post('/transactions', createTransaction);

module.exports = router;
