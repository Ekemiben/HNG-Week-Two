
import express from 'express';
import { classifyNumber } from '../services/numberService.js';

const router = express.Router();

router.get('/classify-number', (req, res) => {
    const { number } = req.query;

    const parsedNumber = parseInt(number);
    if (isNaN(parsedNumber)) {
        return res.status(400).json({
            number,
            error: true
        });
    }

    const result = classifyNumber(parsedNumber);
    return res.status(200).json(result);
});

export default router;
