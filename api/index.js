// Import modules using require()
const express = require('express');
const app = express();

// Define your API endpoint
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from the serverless function!' });
});

// Export the Express app instance using module.exports
module.exports = app;
