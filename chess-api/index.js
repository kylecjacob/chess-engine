const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config({ path: './config/.env' });
const Game = require('./common/models/Game.js');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.get('/healthcheck', (req, res) => {
    res.sendStatus(200);
});

app.post('/api/new-game', async (req, res) => {
    // res.send(req.body);
    const game = new Game({
        board: {
            positions: [
                {
                    file: 'a',
                    rank: 1,
                    location: {
                        x: 1,
                        y: 1
                    }
                }
            ]
        }
    });
    const result = await game.save();
    res.send(result);
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});