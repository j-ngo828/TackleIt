import dotenv from 'dotenv';

dotenv.config();

const { PORT = 8080, MONGODB_URI } = process.env;

export { PORT, MONGODB_URI };
