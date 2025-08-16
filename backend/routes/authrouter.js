import express from "express"
import { login, logOut, signUp } from "../controllers/auth.js"
const authrouter = express.Router()
authrouter.post("/signup",signUp)
authrouter.post("/signin",login)
authrouter.get("/logout",logOut)
export default authrouter
