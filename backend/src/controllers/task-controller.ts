
import MySQLConnection from '../connections/mysql-connection'
import { Request, Response } from 'express';

class TaskController {

  public createTask = (req: Request, res: Response) => {
    const { title, description, due_date } = req.body;

    MySQLConnection.query('CALL createTask(?, ?, ?)', [title, description, due_date], (err, result) => {
      let resCode = 200;
      if (err) {
        resCode = 500;
        throw err
      };

      res.status(resCode).send(result);
    });
  }

  public readTasks = (req: Request, res: Response) => {
    MySQLConnection.query('CALL readTasks()', (err, result) => {
      let resCode = 200;
      if (err) {
        resCode = 500;
        throw err
      };

      res.status(resCode).send(result[0])
    });
  }

  public updateTask = (req: Request, res: Response) => {
    const { id, title, description, due_date } = req.body;

    MySQLConnection.query('CALL updateTask(?,?, ?, ?)', [id, title, description, due_date], (err, result) => {
      let resCode = 200;
      if (err) {
        resCode = 500;
        throw err
      };

      res.status(resCode).send(result)
    });
  }
  public deleteTask = (req: Request, res: Response) => {
    const { id } = req.body;

    MySQLConnection.query('CALL deleteTask(?)', [id], (err, result) => {
      let resCode = 200;
      if (err) {
        resCode = 500;
        throw err
      };

      res.status(resCode).send(result)
    });
  }
}

export default new TaskController();