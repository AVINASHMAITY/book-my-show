const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    movie: { 
        type: String,
        required: true
    },
    slot: { 
        type: String,
        required: true
    },
    seats: {
        A1: { type: Number },
        A2: { type: Number },
        A3: { type: Number },
        A4: { type: Number },
        D1: { type: Number },
        D2: { type: Number }
    },
    bookedAt:  { type: Date, default: Date.now, index: true }
})

const bookmodel = mongoose.model("bookmovieticket",movieSchema)

module.exports = bookmodel