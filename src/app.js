import 'dotenv/config';
import './database';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import routes from './routes';
import GlobalError from './errors/GlobalError';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(cors());
    this.server.use(morgan('dev'));
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }

  errorHandler() {
    this.server.use((err, req, res, next) => {
      if (err instanceof GlobalError) {
        return res.status(err.statusCode).json({
          status: 'error',
          message: err.message,
        });
      }

      return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
        codeMessage: err.message,
      });
    });
  }
}

export default new App().server;
