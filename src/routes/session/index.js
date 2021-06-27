import { Router } from 'express';

import SessionController from '../../app/controllers/SessionController';

const routes = new Router();

const sessionController = new SessionController();

routes.post('/sessions', sessionController.create);

export default routes;
