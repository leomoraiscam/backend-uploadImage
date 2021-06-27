import { verify } from 'jsonwebtoken';
import GlobalError from '../../errors/GlobalError';

export default async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new GlobalError('User not authorized', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await verify(token, process.env.APP_SECRET);

    request.user = decoded.id;

    return next();
  } catch (error) {
    throw new GlobalError('Invalid token', 401);
  }
};
