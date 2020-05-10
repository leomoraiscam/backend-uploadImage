const PostModel = require('../models/Posts');

module.exports = {
  async store(req, res) {
    const { originalname: name, size, filename: key } = req.file;

    const post = await PostModel.create({
      name,
      size,
      key,
      url: '',
    });

    res.json(post);
  },
};
