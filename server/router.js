import express from 'express';
import {testRouter, userRouter, todoRouter} from './routers';

const router = express();

router.use('/', userRouter);
router.use('/', todoRouter);

export default router;