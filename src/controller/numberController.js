import { classify } from '../services/numberService.js';


export const classifyNumber = (req, res) => {
    const { number } = req.query;
    const num = parseInt(number, 10);

    if (isNaN(num)) {
        return res.status(400).json({ number, error: true });
    }

    res.json(classify(num));
};
