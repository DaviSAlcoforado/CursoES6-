const usuarios = [
        { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
        { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
        { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
       ];
       

const newArr = usuarios.map(function(item) {
        return item.idade;
});

console.log(newArr);

const sum = usuarios.reduce(function(total,next) {
        return total + next;
});

const filter = usuarios.filter(function(item) {
        if (item.idade > 18) {
                return item;
        }
});

console.log(filter);

const find = usuarios.find(function(item) {
        if (item.empresa === 'Google') {
                return item;
        }
});
console.log(find);

const op = usuarios
.map(usuario=>({...usuario, idade: usuario.idade*2}))
.filter(usuario=>(usuario.idade <= 50));

console.log(op);