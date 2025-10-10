import express from 'express';
import { loginValidation, signupValidation } from '../middlewares/AuthValidation.js';
import { login, signup } from '../controllers/AuthController.js';
const AuthRouter = express.Router();

AuthRouter.use('/login',loginValidation,login)
AuthRouter.use('/signup',signupValidation,signup)
export default AuthRouter;