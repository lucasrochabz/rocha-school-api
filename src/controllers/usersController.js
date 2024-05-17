const { create } = require('../model/users')

const usersController = {
  createUser: async (req, res) => {
    const { nome, email, senha } = req.body;
    const createUser = await create(nome, email, senha);
  
    if(createUser) {
      res.json({message: 'Usuário criado com sucesso'})
    }
  }
}

module.exports = { usersController };
