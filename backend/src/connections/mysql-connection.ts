
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

class MySQLConnection {
  config: mysql.ConnectionConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USR,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    port: 3306
  }

  connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection(this.config);
    this.connection.connect((err: any) => {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
    });
  }
}

export default new MySQLConnection().connection;