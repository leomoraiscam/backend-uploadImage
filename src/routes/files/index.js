import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../../config/multer';

import FileController from '../../app/controllers/FileController';

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/files', upload.single('file'), FileController.create);

export default routes;
