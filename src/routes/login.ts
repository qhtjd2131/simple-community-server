import express from 'express';
import db from '../database/db';
import bodyParser from 'body-parser';
import { makeToken } from '../utils/login';
const router = express.Router();
router.use(
  express.urlencoded({
    extended: true,
  }),
);
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

router.post('/', (req, res) => {
  const { login_id, login_password } = req.body;
  console.log('login 요청');
  if (!login_id || !login_password) return;

  //db에 있는 로그인 정보가 맞는지 확인
  db.query(
    `SELECT * FROM users WHERE login_id="${login_id}"`,
    (err, results) => {
      if (err) throw Error;

      const user = {
        id: results.id,
        auth: results.auth,
        name: results.name,
        nick_name: results.nick_name,
        login_id: results.login_id,
      };

      const token = makeToken(user);

      console.log(results, user);
      res.status(200).send({ user, token });
    },
  );
});

export default router;
