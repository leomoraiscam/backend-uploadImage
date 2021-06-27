import { Router } from 'express';
import AuthMiddleware from '../../app/middleware/auth';

import UserController from '../../app/controllers/UserController';

const routes = new Router();

const userController = new UserController();

routes.post('/users', userController.create);
routes.get('/users/:id', AuthMiddleware, userController.show);

export default routes;
