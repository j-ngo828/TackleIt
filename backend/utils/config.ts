import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGODB_URI =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI!
    : process.env.TEST_MONGODB_URI!;

export { PORT, MONGODB_URI };
