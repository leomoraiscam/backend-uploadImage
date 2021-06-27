import User from '../models/User';

class UsersRepository {
  async findByEmail(email) {
    return User.findOne({
      where: {
        email,
      },
    });
  }

  async findById(user_id) {
    return User.findOne({
      where: {
        id: user_id,
      },
      attributes: ['id', 'name', 'email'],
      include: [
        {
          association: 'files',
          attributes: ['id', 'filename', 'url_file'],
        },
      ],
    });
  }

  async create({ name, email, password }) {
    return User.create({
      name,
      email,
      password,
    });
  }

  async delete(id) {
    return User.destroy({
      where: {
        id,
      },
    });
  }
}

export default new UsersRepository();
