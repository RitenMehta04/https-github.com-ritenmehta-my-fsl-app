// src/index.js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from FSL DevOps Challenge!' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', replicas: process.env.HOSTNAME || 'local' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app }; // For testing
