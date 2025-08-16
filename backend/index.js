import express from "express";
import connectdb from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./routes/userrouter.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import authrouter from "./routes/authrouter.js";
dotenv.config();
const app = express();
const port = 3000;
app.use(express.json())
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
}))
app.use(cookieParser())
app.use("/api/auth",authrouter)//for signin and signup
app.use("/api/user",userRouter)//for user details
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  connectdb();
  console.log(`Example app listening on port ${port}`);
});
