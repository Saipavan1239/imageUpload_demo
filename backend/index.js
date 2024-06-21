import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import uploadRoute from './controller/routeUpload.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

app.use("/upload", uploadRoute);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
