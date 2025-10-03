import express from 'express';
import auth from './auth.js';
import login from './login.js';
import router from '../routes/loginRouteInsideMiddleware.js';
const app = express();
app.use(express.json());
app.use('/api',auth,login,router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});