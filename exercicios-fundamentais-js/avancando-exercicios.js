//Exercício de Manipulação de Array

//Crie uma lista de compras que é inicialmente vazia, adicione 5 itens à lista usando push(). Agora, remova o primeiro item da lista usando shift(). Imprima a lista final no console.

const listaCompras = []

listaCompras.push('coquinha', 'leite', 'uva', 'maça', 'ovos')

listaCompras.shift()
console.log(listaCompras)

//Exercício de Manipulação de Array - find()

//vc tem umarray de numeros: [3, 7, 11, 14, 21, 29, 36, 42]
//use a funcao find() para encontrar o primeiro numero que é 
//divisivel por 7 e maior que 10

const numeros = [3, 7, 11, 14, 21, 29, 36, 42]

const numeroResultado = numeros.find((element) => element > 10 && element % 7 === 0)

console.log(numeroResultado)


//Exercício de Manipulação de Array - filter()

//Dado o array de numeros: [5, 10, 15, 20, 25, 30, 35, 40]
//use a função filter() para criar um novo array que contenha apenas os numeros
//que sao maiores que 20

const numeros2 = [5, 10, 15, 20, 25, 30, 35, 40]

const numeros2Filter = numeros2.filter((element) => element > 20)
console.log(numeros2Filter)

//Exercício de Manipulação de String - split(), trim()

//Dada a String: " Bom dia, mundo!  ".
//remova os espaços em branco no inicio e no final da string
//em seguida, divida a string em palavras

const frase1 = "  Bom dia, mundo!  "

const frase2 = frase1.trim()

console.log(frase2)

const frase2Dividida = frase2.split(' ')

console.log(frase2Dividida)

//Exercício de Manipulação de String - startsWidth(), e endsWidth()

//Dada a string: 'O rato roeu a roupa do rei de Roma'.
//Verifique se a string começa com a palavra 'O' e termina com a palavra 'Roma'

const frase3 = 'O rato roeu a roupa do rei de Roma'

const frase3Starts = frase3.startsWith('O')
const frase3Ends = frase3.endsWith('Roma')

console.log(frase3Starts, frase3Ends)
