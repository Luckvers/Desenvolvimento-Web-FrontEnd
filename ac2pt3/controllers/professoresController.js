const professores = [
    {
      id: "1",
      nome: "Prof. Carlos",
      idade: 40,
      departamento: "Matemática",
      turmas: [
        { codigo: "9A", disciplina: "MAT101", alunos: ["João", "Maria", "Pedro"] },
        { codigo: "10A", disciplina: "MAT201", alunos: ["Ana", "Luiz"] }
      ]
    },
    {
      id: "2",
      nome: "Prof. Ana",
      idade: 35,
      departamento: "História",
      turmas: [
        { codigo: "9A", disciplina: "HIS101", alunos: ["João", "Pedro"] },
        { codigo: "10B", disciplina: "HIS201", alunos: ["Maria", "Carlos", "Luiza"] }
      ]
    },
    {
      id: "3",
      nome: "Prof. João",
      idade: 50,
      departamento: "Ciências",
      turmas: [
        { codigo: "9A", disciplina: "CIE101", alunos: ["João", "Maria"] },
        { codigo: "9B", disciplina: "CIE101", alunos: ["Pedro", "Luiz"] }
      ]
    }
  ];

exports.getTodos = (req, res) => {
  res.json(professores);
};

exports.getPorId = (req, res) => {
  const professor = professores.find(p => p.id === req.params.id);
  if (!professor) return res.status(404).send("Id não existente");
  res.json(professor);
};

exports.getTurmas = (req, res) => {
  const professor = professores.find(p => p.id === req.params.id);
  if (!professor) return res.status(404).send("Id não existente");
  res.json(professor.turmas);
};

exports.atualizar = (req, res) => {
  const { nome, idade, departamento } = req.body;
  const professor = professores.find(p => p.id === req.params.id);
  if (!professor) return res.status(404).send("Id não existente");

  if (nome) professor.nome = nome;
  if (idade) professor.idade = idade;
  if (departamento) professor.departamento = departamento;

  res.json(professor);
};

exports.adicionarTurma = (req, res) => {
  const professor = professores.find(p => p.id === req.params.id);
  if (!professor) return res.status(404).send("Id não existente");

  const { codigo, disciplina, alunos } = req.body;
  professor.turmas.push({ codigo, disciplina, alunos });
  res.status(201).json(professor);
};

exports.getPorDepartamento = (req, res) => {
  const departamento = req.params.departamento;
  const resultado = professores.filter(p => p.departamento === departamento);
  res.json(resultado);
};

exports.remover = (req, res) => {
  const index = professores.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).send("Id não existente");

  professores.splice(index, 1);
  res.send("Professor removido com sucesso");
};
