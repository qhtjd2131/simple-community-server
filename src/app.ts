import express from 'express';
import indexRouter from './routes/index';
import friendsRouter from './routes/users';
import loginRouter from './routes/login';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import http from 'http';

const app = express();
const port = 8000;

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '/path/to/.env.development' });
} else if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.join(__dirname, '/path/to/.env.production') });
} else {
  throw new Error('process.env.NODE_ENV를 설정하지 않았습니다!');
}

console.log(process.env.NODE_ENV);
console.log(process.env.DATABASE_HOST);

app.use(cors());
app.use('/', indexRouter);
app.use('/users', friendsRouter);
app.use('/login', loginRouter);

app.listen(port, () => {
  console.log(`서버 실행. http://localhost:${port}`);
});
