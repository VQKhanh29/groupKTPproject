// server.js
require('dotenv').config();
const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
