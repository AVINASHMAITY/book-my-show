const express = require("express");

// Create a new router instance using the 'express.Router()' method.
const router = express.Router();

// Imports 'postBookings' and 'getLastBooking'.
const createMovie = require("../components/controller/createMovie");
const updateMovie = require("../components/controller/updateMovie");

// Define a route for handling POST requests to book a movie.
// When a POST request is made to '/booking', it will be handled by the 'postBooking' function from the 'bookingController'.
router.post("/booking", createMovie);
// When a GET request is made to '/booking', it will be handled by the 'getLastBooking' function from the 'bookingController'.
router.get("/booking", updateMovie);

module.exports = router;