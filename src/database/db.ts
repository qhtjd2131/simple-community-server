import mysql from 'mysql';
import { dbConfig } from '../config/db';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'secret258!',
  port: 3306,
  database: 'simple_community',
});
console.log(dbConfig);

const connection2 = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  port: parseInt(dbConfig.port),
  database: dbConfig.database,
});

connection2.connect();

export default connection2;
