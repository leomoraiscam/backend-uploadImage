import { Router } from 'express';

import UserController from '../../app/controllers/UserController';

const routes = new Router();

const userController = new UserController();

routes.post('/users', userController.create);
routes.get('/users/:id', userController.show);

export default routes;
