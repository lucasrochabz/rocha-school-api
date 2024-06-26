const { list, create} = require('../model/teachers')

const teacherController = {
  listAll: async (req, res) => {
    const selectTeachers = await list();
  
    res.json(selectTeachers)
  },

  createOne: async (req, res) => {
    const { nome, materia, turno } = req.body;
    const createTeacher = await create(nome, materia, turno);
  
    if(createTeacher) {
      res.json({message: 'Professor cadastrado com sucesso'})
    }
  }
}

module.exports = { teacherController };
