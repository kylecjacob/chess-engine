const mongoose = require("mongoose");

const CoordinatesSchema = mongoose.Schema({
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    }
});

// const PieceSchema = mongoose.Schema({
//     type: {
//         type: String,
//         required: true
//     },
//     validMoves: {
//         type: [PositionSchema],
//         required: true
//     },
//     color: {
//         type: String,
//         required: true
//     },
//     identifer: {
//         type: String,
//         required: true
//     },
//     possibleTakes: {
//         type: [PositionSchema],
//         required: true
//     },
//     possibleMoves: {
//         type: [PositionSchema],
//         required: true
//     },
//     touched: {
//         type: Boolean,
//         required: true
//     }
// });

const PositionSchema = mongoose.Schema({
    rank: {
        type: Number,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    location: {
        type: CoordinatesSchema,
        required: true
    },
    // piece: {
    //     type: PieceSchema,
    //     required: true
    // },
    // hasPiece: {
    //     type: Boolean,
    //     requied: true
    // }
});

const BoardSchema = mongoose.Schema({
    positions: {
        type: [PositionSchema],
        required: true
    }
});

const GameSchema = mongoose.Schema({
    board: {
        type: BoardSchema,
        required: true
    },
    turn: String
});

module.exports = mongoose.model('Game', GameSchema);