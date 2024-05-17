const { create, getOne } = require('../model/users')

const usersController = {
  createUser: async (req, res) => {
    const { nome, email, senha } = req.body;
    const createUser = await create(nome, email, senha);
  
    if(createUser) {
      res.json({message: 'Usuário criado com sucesso'})
    }
  },

  authUser: async (req, res) => {
    const { email, senha } = req.body;
    const auth = await getOne(email, senha);

    if (auth) {
        res.json({ message: 'Você está logado!' });
    } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
  }
}

module.exports = { usersController };
