import CreateUsersService from '../services/CreateUsersService';
import ShowUserService from '../services/ShowUserService';

class UserController {
  async show(request, response) {
    const { id } = request.params;

    const user = await ShowUserService.execute(id);

    return response.status(201).json(user);
  }

  async create(request, response) {
    const { name, email, password } = request.body;

    const user = await CreateUsersService.execute({
      name,
      email,
      password,
    });

    const serializedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.created_at,
    };

    return response.status(201).json(serializedUser);
  }
}

export default UserController;
