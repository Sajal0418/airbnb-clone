const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User=require('./models/User.js');
require('dotenv').config();

const bcryptSalt=bcrypt.genSaltSync(12);

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

// Log the connection string to verify it's being loaded correctly
// console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const userDoc =await User.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
    })
    res.json(userDoc);
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
