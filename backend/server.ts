import express , {Application} from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";

const app : Application = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"*",
    }
});

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Testing Typing speed test API");
});

io.on("connection",(socket)=>{
    console.log("user Connected with Session ID " , socket.id)
});
io.on("disconnect",(socket)=>{
    console.log("User with Session ID" , socket.id , "Disconnected" )
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});