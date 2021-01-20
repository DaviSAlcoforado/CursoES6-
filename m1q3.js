const arr = [1, 2, 3, 4, 5];

arr.map(item => (item+10)); 

const usuario = { nome: 'Diego', idade: 23 };

const teste = (usuario) => usuario.idade;

console.log(teste(usuario));

const nome = "Diego";
const idade = 23;
const mostraUsuario= (nome = 'Diego', idade = 18) => ({nome, idade});

console.log(mostraUsuario(nome,idade));

const promise = () => new Promise((resolve,reject) => resolve());