import { Router } from 'express';

import User from './users';
import File from './files';
import Session from './session';

const routes = new Router();

const loaderRoutes = [User, File, Session];

loaderRoutes.map((res) => routes.use(res));

export default routes;
