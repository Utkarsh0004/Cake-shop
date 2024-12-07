import express from "express"
import { loginUser,registerUser } from "../controllers/user_controller.js"

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser);

export default userRouter;