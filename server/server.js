const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());                       
app.use(express.urlencoded({ extended: true })); 

// connect mongoose to local DB 'vocab_builder'
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/vocab_builder';
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => console.error('MongoDB connection error:', err));
db.once('open', () => console.log('MongoDB connected to', MONGO_URL));

// API routes
const wordRoutes = require('./routes/wordRoutes');
wordRoutes(app);

const userRoutes = require('./routes/userRoutes');
userRoutes(app);

app.get('/', (req, res) => {
  res.json({ message: 'API is alive.' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
