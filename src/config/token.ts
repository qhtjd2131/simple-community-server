// import dotenv from 'dotenv';
// dotenv.config();

export const tokenConfig = {
  secretKey: process.env.JWT_SECRET_KEY as string,
  algorithm: process.env.JWT_ALGORITHM as string,
  expiresIn: process.env.JWT_EXPIRESIN as string,
  issuer: process.env.JWT_ISSUER as string,
};
