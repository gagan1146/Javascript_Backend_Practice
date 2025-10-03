import express from 'express';

const signupRouter = express.Router();

// POST /api/auth/signup
signupRouter.post('/', (req, res) => {
    res.send("Signup route");
});

export default signupRouter;