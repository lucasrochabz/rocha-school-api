const { list } = require('../model/testeOrder')

const listTeachers = async (req, res) => {
  const selectTeachers = await list();

  res.json(selectTeachers)
}

module.exports = {
  listTeachers
};
