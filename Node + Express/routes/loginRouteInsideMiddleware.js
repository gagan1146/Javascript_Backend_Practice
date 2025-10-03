import express from 'express';

const router = express.Router();
router.get('/login', (req, res) => {
    console.log(req.body);
  res.send('Login Page');
});

export default router;