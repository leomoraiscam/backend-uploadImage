import { Router } from 'express';

import User from './users';
import File from './files';

const routes = new Router();

const loaderRoutes = [User, File];

loaderRoutes.map((res) => routes.use(res));

export default routes;
