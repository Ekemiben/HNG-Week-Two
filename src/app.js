import express from 'express';
import cors from 'cors';
import numberRoutes from './routes/numberRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Number Classification API Use /api/classify-number?number=371 to get started.');
});
app.use('/api', numberRoutes);

export default app;
