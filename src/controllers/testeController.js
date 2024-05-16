const { list, create, createT} = require('../model/testeOrder')

const listTeachers = async (req, res) => {
  const selectTeachers = await list();

  res.json(selectTeachers)
}

const createUser = async (req, res) => {
  const { nome, email, senha } = req.body;
  const createUser = await create(nome, email, senha);

  if(createUser) {
    res.json({message: 'Usuário criado com sucesso'})
  }
}

const createTeacher = async (req, res) => {
  const { nome, materia, turno } = req.body;
  const createTeacher = await createT(nome, materia, turno);

  if(createTeacher) {
    res.json({message: 'Professor cadastrado com sucesso'})
  }
}

module.exports = {
  listTeachers,
  createUser,
  createTeacher
};
