import CreateFileService from '../services/CreateFileService';

class FileController {
  async create(request, response) {
    const { key } = request.file;
    const { user: id } = request;

    const post = await CreateFileService.execute({
      filename: key,
      user_id: id,
    });

    return response.json(post);
  }
}

export default new FileController();
