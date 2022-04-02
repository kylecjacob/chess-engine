const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
    board: {
        positions: [
            {
                rank: Number,
                file: String,
                location: {
                    x: Number,
                    y: Number
                },
                piece: {
                    type: String,
                    validMoves: [],
                    color: String,
                    identifier: String,
                    possibleTakes: [],
                    possibleMoves: [],
                    touched: Boolean
                },
                hasPiece: Boolean,
                _id: false
            },
        ],
        _id: false
    },
    turn: String,
    _id: String
}, { typeKey: '$type' });

module.exports = mongoose.model('Game', GameSchema);