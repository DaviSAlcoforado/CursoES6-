function soma (... params) {
        return params.reduce((total,next)=>total+next);
}

console.log(soma(1,3,4))

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const usuario1 = {
        nome: 'Daví',
        idade: 18,
        empresa: 'Zeropay',
};

const usuario2 = {...usuario1, nome: 'Daví'};

console.log(usuario2);