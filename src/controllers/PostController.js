const PostModel = require('../models/Posts');

module.exports = {
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
