import db from '../database/db';
import express from 'express';

const router = express.Router();
// const app = express();
// app.get(...)
// 위 방식과 express.Router() 의 차이점은 다음과 같다.
// app.get() 은 하나의 메인 앱이다.
// express.Router() 는 미니 앱이다.
// 즉, express.Router() 를 사용한다면 해당 라우트에서만 사용되는 미들웨어를 철저하게 분리된 형태로 사용가능하다.
// 만약 app.get()에서 해당 라우트만 특정 미들웨어를 적용할려 했다면 분기처리가 필요했을것이다.
// 결론적으로 라우터의 모듈화 이다.

router.get('/', (req, res) => {
  db.query('SELECT * FROM test_friends', (err, results) => {
    if (err) throw Error;
    res.send(results);
  });
  //   res.send("friends");
});

export default router;
