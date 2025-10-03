import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import AuthRouter from './routes/routes.js';

dotenv.config();
const app = express();
connectDB();

app.use(bodyParser.json());
app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', AuthRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});