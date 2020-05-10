const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  name: String,
  size: Number,
  Key: String,
  url: String,
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Posts', PostSchema);
