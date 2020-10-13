import cors from 'cors';
import bodyParser from 'body-parser';
import { Request, Response, NextFunction, Application } from 'express';

export default class Middleware {

  static init(app: Application) {
    this.bodyParserConfig(app);
    this.corsConfig(app);
  }

  private static bodyParserConfig = (app: Application) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  }

  private static corsConfig = (app: Application) => {
    const corsOptions = {
      origin: process.env.WEB_URL
    };

    app.use(cors(corsOptions));

    app.use((req: Request, res: Response, next: NextFunction) => {

      const apiURL: string = process.env.API_URL || '*';
      res.setHeader('Access-Control-Allow-Origin', apiURL);
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      next();
    });
  }
}
