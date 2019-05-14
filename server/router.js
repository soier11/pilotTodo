import express from 'express';
import * as apis from './routers';

const router = express.Router();

router.use('/test', apis.testRouter);

export default router;