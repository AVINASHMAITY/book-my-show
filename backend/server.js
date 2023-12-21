const express = require("express")
const app = express()
const cors = require("cors")

require("dotenv").config()
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use();
app.use(cors());

const routes = require("./routes/bookingRoutes");

app.use("/api", routes);

const dbconnect = require("./config/database")
dbconnect()

app.listen(PORT,()=>{
    console.log(`server is instantitate on ${PORT}`)
})

app.get("/", function(req,res){
    try{
        res.send("BookMyShow is live!")
    } catch(err){
        console.error(err);
        res.status(500).json({ error: " Server Error" });
    }
});