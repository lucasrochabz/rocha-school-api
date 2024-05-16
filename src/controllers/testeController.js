// const { request, response } = require('express');
const { list, create } = require('../model/testeOrder')

const listTeachers = async (req, res) => {
  const selectTeachers = await list();

  res.json(selectTeachers)
}

const createUser = async (req, res) => {
  const { nome, email, senha } = req.body;
  const createUser = await create( nome, email, senha );

  if(createUser) {
    res.json({message: 'Usuário criado com sucesso'})
  }
}

module.exports = {
  listTeachers,
  createUser
};
