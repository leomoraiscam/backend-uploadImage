import CreateFileService from '../services/CreateFileService';

class FileController {
  async create(req, res) {
    const { key } = req.file;
    const { user: id } = req;

    const post = await CreateFileService.execute({
      filename: key,
      user_id: id,
    });

    return res.json(post);
  }
}

export default new FileController();
