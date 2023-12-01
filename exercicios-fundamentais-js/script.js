//Exercícios de fundamentos 


//Exercício 1: Olá, Mundo!
//Crie um script que imprima "Olá, Mundo!" no console

console.log('Olá, Mundo!')

//Exercício 2: Conversão de tipos
//Dado o valor de uma string "1234", converta-o e exiba o tipo da variável no console

const valor = 1234
const valorNumber = Number(1234)
console.log(typeof valorNumber + ` ${valorNumber}`)

//Exercício 3: Manipulação de strings
//Dado uma string "Javascript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras tem na frase

const frase = 'Javascript é incrível'

const numCaracteres = frase.length
const numPalavras = frase.split(' ').length

console.log('num de caracteres: ' + numCaracteres, 'num de palavras: ' + numPalavras)

//exercício 4: Loops e Arrays
//Crie um Array com cinco nomes. Use um loop for para imprimir cada nome no console

const nomes = ['pedro', 'tiago', 'joao', 'lucas']

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

//Exercício 5: Funções, Strings e Math
//Crie uma função que aceita uma string representando um horário no formato de 24 horas. A função deve retornar uma string que converta ao formato de 12 horas. 

function converterHora(hora24) {
     const [hora, minuto] = hora24.split(':')
     const hora12 = hora % 12 || 12

     let periodo = 'AM'

     if(hora>12) {
        periodo = 'PM'
     }
     console.log(`${hora12}:${minuto} ${periodo}`)
}

converterHora('15:16')
converterHora('09:46')
converterHora('21:12')

