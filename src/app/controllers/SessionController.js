import SessionService from '../services/SessionService';

class SessionController {
  async create(request, response) {
    const { email, password } = request.body;

    const session = await SessionService.execute({
      email,
      password,
    });

    const serializedUser = {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      created_at: session.user.created_at,
      updated_at: session.user.created_at,
    };

    return response.status(201).json({
      user: serializedUser,
      token: session.token,
    });
  }
}

export default SessionController;
