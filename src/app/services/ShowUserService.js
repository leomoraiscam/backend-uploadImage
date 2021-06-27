import UsersRepository from '../repositories/UsersRepository';
import GlobalError from '../../errors/GlobalError';

class ShowUsersService {
  async execute(id) {
    const user = await UsersRepository.findById(id);

    if (!user) {
      throw new GlobalError('user not found', 404);
    }

    return user;
  }
}

export default new ShowUsersService();
