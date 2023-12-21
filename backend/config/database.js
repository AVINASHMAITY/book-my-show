const mongoose = require("mongoose")

require("dotenv").config()

const DATABASE = process.env.DATABASE

//connect Method used to connect mongoDB server online.
const dbconnect = () => {
    mongoose.connect(DATABASE,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("dbconnection successful"))
    .catch((err)=>{
        console.error(err.message)
        console.log("dbconnection failed")
        process.exit(1)
    })
}

module.exports = dbconnect;