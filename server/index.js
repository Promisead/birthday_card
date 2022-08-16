import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());
app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/posts', express.static('uploads'));
app.get('/', (req, res) => {
  res.send('Welcome to B Card Api');
});

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to db'))
  .catch((error) => console.log(`${error} did not connect`));

app.listen(PORT, () => {
  console.log(`serve at http://localhost:${PORT}`);
});
//mongoose.set("useFindAndModify", false);
