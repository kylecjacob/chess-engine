const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
const Game = require('./common/models/Game.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.get('/healthcheck', (req, res) => {
    res.sendStatus(200);
});

app.post('/api/new-game', async (req, res) => {
    const game = new Game(req.body);
    const result = await game.save();
    res.send(result);
});

app.get('/api/game/:id', async (req, res) => {
    const result = await Game.findById(req.params.id);
    if (!result) {
        res.status(400).json('Game not found');
    } else {
        res.send(result);
    }
});

app.put('/api/game/:id', async (req, res) => {
    const result = await Game.findByIdAndUpdate(req.params.id, req.body);
    if (!result) {
        console.log(result);
        res.status(400).json('Game not found');
    } else {
        res.send(result);
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});