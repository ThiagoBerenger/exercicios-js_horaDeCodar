// ES6 + => Versao do javascript
//let e const

let n = 10 //mutável
n = 20

const x = 15 //constante 

function testeVar() {
    var x = 1
    if (true) {
        var x = 2
        console.log(x)
    }

    console.log(x)
}

function testeLet() {
    let x = 1
    if (true) {
        let x = 2
        console.log(x)
    }

    console.log(x)
}

testeVar()
testeLet()

//arrow function

const soma = (a, b) => a + b
console.log(soma(1,9))

const quadrado = (numero) => numero * numero
console.log(quadrado(4))

const cumprimento = (nome) => {
    const mensagem = `Olá, ${nome}!`
    return mensagem
}

console.log(cumprimento('fulano'))

//template literals

const nome = 'joao'
const idade = 22

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`) //${} <- possível executar expressoes 

// Destructuring => desestruturação

const pessoa = {nome: "hugo", idade: 40, profissao: "Pedreiro"}

const {nome: nome2, idade: idade2, profissao} = pessoa

console.log(nome2, profissao)

const numeros = [1, 2, 3, 4]

const [primeiro, segundo, terceiro] = numeros

console.log(primeiro, segundo, terceiro)


// spread operator => espalhamento

const array1 = [1, 2, 3]
const array2 = [...array1, 4, 5, 6]

console.log(array2)

const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0)
//reduce = reduzir todos os números de uma lista em um só

console.log(soma2(1,2,3,4,5,6,7))


//default parameters

function saudacao(nome = 'visitante') {
    console.log(`Olá, ${nome}!`)
}

saudacao()
saudacao('fulaninho')


//object literals enhancements
// {nome: 'fulaninho'}

const nomeNovo = 'Felipe'
const idadeNova = '24'

const pessoaNova = {nome: nomeNovo, idade: idadeNova}

console.log(pessoaNova)

const saudacaoObject = {
    dizerOi() {
        console.log('Oi')
    }
}

saudacaoObject.dizerOi()


//classes e heranças

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`Olá pessoal, meu nome é ${this.nome}`)
    }
}

const joao = new Pessoa('joãozinho', 50)
console.log(joao)
joao.falar()

const pedro = new Pessoa('Pedrão', 99)

class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade)
        this.salario = salario
    }

    falarFuncionario() {
        super.falar()
        console.log(`Eu ganho R$ ${this.salario}`)
    }
}

const mario = new Funcionario('Mario', 102, 3200)

console.log(mario)

mario.falarFuncionario()