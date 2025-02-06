import express from 'express';
import cors from 'cors';
import numberRoutes from './routes/numberRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', numberRoutes); // API routes

export default app;
