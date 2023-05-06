import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();

const PORT = process.env.PORT || 8080;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const MONGODB_URI =
  process.env.NODE_ENV === 'development' ? process.env.MONGODB_URI! : process.env.TEST_MONGODB_URI!;
/* eslint-enable @typescript-eslint/no-non-null-assertion */

export { PORT, MONGODB_URI };
