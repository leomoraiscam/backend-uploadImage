import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import UsersRepository from '../repositories/UsersRepository';
import GlobalError from '../../errors/GlobalError';

class SessionService {
  async execute({ email, password }) {
    const user = await UsersRepository.findByEmail(email);

    if (!user) {
      throw new GlobalError('incorrect email or password', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new GlobalError('incorrect email or password', 401);
    }

    const token = sign({ id: user.id }, process.env.APP_SECRET, {
      subject: String(user.id),
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export default new SessionService();
