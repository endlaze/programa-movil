import express from 'express';
import Middleware from './middleware';

export class App {
  app: express.Application;

  constructor() {
    this.app = express();
    Middleware.init(this.app);
  }
}

export default new App().app