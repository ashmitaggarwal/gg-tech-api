// server.js
const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const transactionRoutes = require('./routes/transactionRoutes');

// Use routes
app.use('/api', transactionRoutes);

const PORT = process.env.PORT || 5454;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
