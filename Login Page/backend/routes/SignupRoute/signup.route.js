import express from 'express';

const signupRouter = express.Router();

// POST /api/auth/signup
signupRouter.post('/', (req, res) => {
    console.log("User is registered successfully....");
    res.send("Signup route");
});

export default signupRouter;