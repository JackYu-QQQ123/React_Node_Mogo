import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import Hotel from "./models/Hotel.js"
const app = express()
dotenv.config()

const connect = async () =>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!")
  } catch (error) {
    handleError(error);
  }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!")
})



app.use("/api/auth",authRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)
app.use("/api/users",usersRoute)

app.get("/try",(req,res)=>{
    res.send("hello user request")
})

app.get("/user",(req,res)=>{
    res.send("hello first request")
})

app.use(express.json)
















app.listen(8800,()=>{
    connect()
        console.log("Connected to backens!")
    }
)