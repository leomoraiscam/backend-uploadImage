import CreateFileService from '../services/CreateFileService';

class FileController {
  async create(req, res) {
    const { user_id } = req.body;
    const { key } = req.file;

    const post = await CreateFileService.execute({
      filename: key,
      user_id,
    });

    return res.json(post);
  }
}

export default new FileController();
