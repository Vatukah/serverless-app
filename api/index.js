import express from 'express';

const app = express();
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from the serverless function!' });
});

module.exports = app;