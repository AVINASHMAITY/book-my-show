 // Import schema model for database operations.
const bookingModel = require("../model/movieModel")

const updateMovie = async (req, res) => {

    try {
        // Retrieve the last booking by sorting in descending order and limiting to 1 result
        const myData = await bookingModel.find().sort({ _id: -1 }).limit(1);
    
        if (myData.length === 0) {
          // No booking found, respond with appropriate message
          res.status(200).json({ data: null, message: "No previous booking found!" });
        } else {
          // Respond with the last booking details
          res.status(200).json({ data: myData[0] });
        }
      } catch (error) {
        // Handle errors and respond with an error message
        res.status(500).json({
          data: null,
          message: "Something went wrong! Please try again.",
        });
      }

}

module.exports = updateMovie;                                                                                            