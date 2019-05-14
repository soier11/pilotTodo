import express from 'express';
import {testService1} from '../services/TestService';

const router = express();

router.get('/', (req, res) => testService1(req, res));

export default router;