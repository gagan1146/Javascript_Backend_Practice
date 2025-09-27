import { Router } from "express";
import Login from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.get('/login',Login)

export default userRouter;