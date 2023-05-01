import cors from 'cors';
import express from 'express';
// import mongoose from 'mongoose';

import todosRouter from '@/controllers/todos';
import { MONGODB_URI } from '@/utils/config';
import logger from '@/utils/logger';

const app = express();

logger.info(`connecting to ${MONGODB_URI}`);

// mongoose
//   .connect(MONGODB_URI)
//   .then(() => {
//     logger.info('connected to MongoDB');
//   })
//   .catch((error) => {
//     logger.error('error connecting to MongoDB:', error.message);
//   });

app.use(cors());
app.use(express.json());

app.use('/api/todos', todosRouter);

export default app;
