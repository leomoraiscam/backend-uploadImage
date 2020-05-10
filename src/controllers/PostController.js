const PostModel = require('../models/Posts');

module.exports = {
  async index(req, res) {
    const post = await PostModel.find();

    return res.json(post);
  },
  async store(req, res) {
    const { originalname: name, size, key, location: url = '' } = req.file;

    const post = await PostModel.create({
      name,
      size,
      key,
      url,
    });

    // console.log(post);

    return res.json(post);
  },
  async delete(req, res) {
    const { id } = req.params;

    const post = await PostModel.findById(id);

    await post.remove();
    return res.send('registro deletado');
  },
};
