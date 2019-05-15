import express from 'express';
import {testRouter} from './routers';

const router = express();

router.use('/test', testRouter);

export default router;