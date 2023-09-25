const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const matchRoutes = require('./routes/match');
const gameRoutes = require('./routes/game');
const voteRoutes = require('./routes/vote');
const getMatchRoutes = require('./routes/getMatchRoutes');
const User = require('../backend/models/User');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/national_day_app', { useNewUrlParser: true, useUnifiedTopology: true });

// 预存一个用户
async function newUsers(){
    const newUser = new User({
        userId: 1, //  userId
        matchCount: 0
    });
    
    await newUser.save();
}

newUsers()


app.use(bodyParser.json())

app.use('/', matchRoutes)
app.use('/', gameRoutes)
app.use('/', voteRoutes)
app.use('/',getMatchRoutes)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})