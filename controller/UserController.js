import User from '../model/User'

class UserController {
  async register(request, response){
    
    const userExists = await User.findOne({
      where: { email: request.body.email },
    });

    if(userExists)return response.status(200).json({error: "Usuário já cadastrado"});

    const {id, ra, name, email} = await User.create(request.body);

    return response.status(201).json({id, ra, name, email});
  }
}

export default new UserController()