import express from 'express';

const loginRouter = express.Router();

// POST /api/auth/login
loginRouter.post('/', (req, res) => {
    res.send("Login route");
});

export default loginRouter;
