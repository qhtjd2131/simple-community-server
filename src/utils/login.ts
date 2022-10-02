import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces/user';
import { tokenConfig } from '../config/token';

dotenv.config();

// export const makeToken = ( user : any ) => {
//   const token = jwt.sign(
//     {
//       type: 'JWT',
//       ...user,
//     },
//     process.env.SECRET_KEY,
//     {
//       expiresIn: '15m', // 만료시간 15분
//       issuer: 'BOSUNG',  // token 발급자
//     },
//   );
// };

export const makeToken = (user: IUser) => {
  const token = jwt.sign(
    {
      type: 'JWT',
      alg: tokenConfig.algorithm,
      ...user,
    },
    tokenConfig.secretKey,
    {
      expiresIn: tokenConfig.expiresIn,
      issuer: tokenConfig.issuer,
    },
  );

  console.log(token);
  return token;
};
