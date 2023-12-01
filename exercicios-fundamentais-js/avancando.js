//Avançando em JavaScript

//Manipulação de arrays

const frutas = ['maça', 'laranja']

frutas.unshift('uva') //adicionando nova fruta

console.log(frutas)

frutas.shift() //remove o primeiro elemento

console.log(frutas)

//map, filter, reduce -> arrow function

const numeros = [1,2,3,4,5,6]

const numeroPar = numeros.find((num) => num % 2 === 0)

console.log(numeroPar) //não percorre todos os elementos da lista (find)

const numerosPares = numeros.filter((num) => num % 2 === 0)

console.log(numerosPares) //filtra a lista e só encontra números pares

//manipulação de strings

const fraseString = "Olá, mundo!   " //muitos espaços em branco

const palavras = fraseString.trim().split(' ')

console.log(fraseString)
console.log(palavras)

const fraseString2 = 'JS é incrível!'

console.log(fraseString2.startsWith('J')) //começa com... 
console.log(fraseString2.endsWith('!')) //termina com...

//exceções e tratamentos de erros

const idade = 15 //tratar o erro para que o programa possa continuar

try {
    if(idade < 18) {
    throw new Error('Você deve ter 18 anos ou mais') 
}

} catch (error) {

    console.log(error.message) //message -> envia somente a mensagem
}

console.log('continuando o programa')

//Callback => função
function cumprimentar(nome, Callback) {
    console.log('olá, ' + nome)
    Callback()
}

function mostrarSaudacao() {
    console.log('como vc esta?')
}

cumprimentar('fulano ', mostrarSaudacao)

cumprimentar('maria', function() {
    console.log('tudo bem?')
})

//settimeout => dps de um tempo executa algo

function mostrarMensagem() {
    console.log('essa msg foi executada após 3 segundos')
}

setTimeout(mostrarMensagem, 3000) ///1000ms = 1s

setTimeout(function(){
    console.log('olá / 1 segundo')
}, 1000)

//promises

const promessa = new Promise((resolve, reject) => {
    
    const condicao = false 

    if(condicao) {
        resolve('A condição é verdadeira')
    } else {
        reject('A condição é falsa')
    }
})

promessa.then((mensagem) => {
    console.log(mensagem)
})
.catch((erro) => {
    console.log(erro)
})

// Bibliotecas feitas que são "promisse based"

const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, 'testando')
})

Promise.all([promise1, promise2]).then((valores) => console.log(valores))


// Async Await

async function obterValor() {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => resolve('valor obtido'), 3000)
    })

    const valor = await promessa
    console.log(valor)
}

obterValor()

//try catch com async await
async function obterValorComErro() {
    try {
        const promessa = new Promise((resolve, reject) => {
            setTimeout(() => reject('valor com erro'), 3500)
        })
    
        const valor = await promessa
        console.log(valor)

    } catch (error) {
        console.log(error)
    }
}

obterValorComErro()

//JSON (JavaScript Object Notation)
// {nome: "teste"} => {"nome":"teste"}
//Padroniza a cominicação
//Consegue se comunicar com front-end e back-end em uma linguagem só

const objeto = {nome:'fulano', idade: 30}

const jsonString = JSON.stringify(objeto)

console.log(jsonString)
console.log(typeof jsonString)

const json = '{"nome": "fulano", "idade": 30}'

const objeto2 = JSON.parse(json) //convertendo
console.log(objeto)


