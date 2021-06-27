import File from '../models/File';

class FileRepository {
  async create({ filename }) {
    return File.create({
      filename,
    });
  }
}

export default new FileRepository();
