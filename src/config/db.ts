// import dotenv from 'dotenv';
// dotenv.config();
export const dbConfig = {
  host: process.env.DATABASE_HOST as string,
  user: process.env.DATABASE_USER as string,
  password: process.env.DATABASE_PASSWORD as string,
  port: process.env.DATABASE_PORT as string,
  database: process.env.DATABASE_SCHEMA as string,
};
