const PostModel = require('../models/Posts');

module.exports = {
  async index(req, res) {
    const post = await PostModel.find();

    return res.json(post);
  },
  async store(req, res) {
    const {
      originalname: name,
      size,
      filename: key,
      location: url = '',
    } = req.file;

    const post = await PostModel.create({
      name,
      size,
      key,
      url,
    });

    res.json(post);
  },
};
