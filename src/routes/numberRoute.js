import express from 'express';
import { classifyNumber } from '../controller/numberController.js';

const router = express.Router();

router.get('/classify-number', classifyNumber);

export default router;
