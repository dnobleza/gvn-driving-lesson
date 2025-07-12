const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require ('pg');
require ('dotenv').config();

// dotenv.config();
// connectDB;

const app = express();

app.use(express.json());
// app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT  || 5000;
app.listen(PORT, () => console.log(`server is now running on port ${PORT}`));