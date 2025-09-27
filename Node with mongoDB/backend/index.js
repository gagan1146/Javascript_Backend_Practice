import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import userRouter from './routes/userRouter.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api/users',userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});