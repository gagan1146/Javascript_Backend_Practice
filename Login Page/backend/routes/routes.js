import express from 'express';
import loginRouter from './LoginRoute/login.route.js';
import signupRouter from './SignupRoute/signup.route.js';
const AuthRouter = express.Router();

AuthRouter.use('/login',loginRouter)
AuthRouter.use('/signup',signupRouter)
export default AuthRouter;