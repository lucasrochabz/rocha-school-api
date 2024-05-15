const { request, response } = require('express');
const { list, create } = require('../model/testeOrder')

const listTeachers = async (req, res) => {
  const selectTeachers = await list();

  res.json(selectTeachers)
}

const createUser = async (req, res) => {
  const { nome, email, senha } = request.body;
  const createUser = await create(nome, email, senha);

  if(createUser) {
    response.json({message: 'Usuário criado com sucesso'})
  }
}

module.exports = {
  listTeachers,
  createUser
};
