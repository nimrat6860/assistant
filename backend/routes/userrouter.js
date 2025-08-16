import express from "express";
import isAuth from "../middleware/isauth.js";
import  {askToAssistant, getCurrentUser, updateAssistant} from "../controllers/usercontroller.js";
import uploadfile from "../middleware/multer.js";

const userrouter = express.Router();
userrouter.get("/current", isAuth, getCurrentUser);
userrouter.post("/update",isAuth,uploadfile.single("assistantImage"),updateAssistant)

userrouter.post("/asktoassistant",isAuth,askToAssistant)

export default userrouter;
