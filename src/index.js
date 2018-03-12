import express from 'express';
import mongoose from 'mongoose';
import attachMiddleware from './middleware';

const app = express();
const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

mongoose.connect(MONGO_DB_URL);

attachMiddleware(app);

app.get('/', (req, res) => res.send('hello world'));
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
