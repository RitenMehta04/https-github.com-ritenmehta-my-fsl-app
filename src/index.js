// src/index.js
import express from 'express';

export const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from FSL DevOps Challenge!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Only start server when NOT in test
if (process.env.NODE_ENV !== 'test') {
  app.listen(8080, () => {
    console.log('Server running on port 8080');
  });
}
