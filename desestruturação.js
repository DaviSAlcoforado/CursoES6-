const usuario = {
        nome: 'Daví',
        idade: 18,
        endereco: {
                cidade: 'Recife',
                estado: 'PE'
        },
};

function mostraNome({nome, idade}) {
        console.log(nome, idade);
}

mostraNome(usuario);