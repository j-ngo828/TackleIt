import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const MONGODB_URI = process.env.MONGODB_URI!;

export { PORT, MONGODB_URI };
