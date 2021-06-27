import FileRepository from '../repositories/FileRepository';
import UsersRepository from '../repositories/UsersRepository';
import GlobalError from '../../errors/GlobalError';

class CreateFileService {
  async execute({ filename, user_id }) {
    const user = await UsersRepository.findById(user_id);

    if (!user) {
      throw new GlobalError('user not found', 404);
    }

    const file = await FileRepository.create({
      filename,
      user_id,
    });

    return file;
  }
}

export default new CreateFileService();
