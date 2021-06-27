import File from '../models/File';

class FileRepository {
  async create({ filename, user_id }) {
    return File.create({
      filename,
      user_id,
    });
  }
}

export default new FileRepository();
