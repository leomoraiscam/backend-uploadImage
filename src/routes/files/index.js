import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../../config/multer';
import AuthMiddleware from '../../app/middleware/auth';

import FileController from '../../app/controllers/FileController';

const upload = multer(multerConfig);

const routes = new Router();

routes.post(
  '/files',
  AuthMiddleware,
  upload.single('file'),
  FileController.create
);

export default routes;
