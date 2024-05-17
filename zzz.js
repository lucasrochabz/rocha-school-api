// cadastrar - ok
[post] = '/signup', createUser
// login user
[get] = '/login', login
//listar professores - ok
[get] = '/list' , listTeacher
// cadastrar professor - ok
[post] = '/create-teacher', createTeacher

// =================================================
// prioridade menor
// atualizar cadastro de professores
[put] = '/listTeacher/:teacherId', updateTeacher
