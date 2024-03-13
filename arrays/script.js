//array: variavel que guarda mais de uma informacao

const caio = ['Caio',15]
const nomes = ['Caio','Akuma','Ken','Dom']

//ARRAY COM OBJETOS 

const pessoas = [
    {
        nome : 'Ryu',
        tipo : 'Pardo', 
        idade : 34
    },

    {
        nome : 'Akuma',
        tipo : 'Branca', 
        idade : 24
    }
]

/*//MOSTRAR ARRAY

console.log(caio)

//MOSTRAR INFORMACAO ESPECIFICA DO ARRAY (array[posicao])

console.log(nomes[2])

//MOSTRAR NO TERMINAL, INVES DE REPETIR DIVERSOS CONSOLE.LOG

const [nome1,nome2,nome3,nome4] = nomes  //criacao de variavel de acordo com os objetos

console.log(nome3) //nome3.toUpperCase ATRIBUIR METODOS DENTRO DO OBJETO

//OPERADOR REST

const [nome1,...resto] = nomes

console.log(nome1)
console.log(resto)

//MUDAR VALOR DENTRO DE UM ARRAY

nomes[1] = 'Munhoz'

nomes.push('Novo jogador')

console.log(nomes[1])

//DELETAR 

nomes.pop()*/

//SABER O TAMANHO DO ARRAY

console.log(nomes.length)

/*LOOPING PARA MOSTRAR UM NOME ATRAS DO OUTRO AUTOMATICAMENTE 

for(let i =0 /*contador*/ ; /*i < nomes.length /*quanto o contador vai rodar, condicao para o contador parar*/ ; /*adiciona 1 ate chegar ao tamanho do array- incremento*//* i++){
    console.log(nomes[i]) //O QUE O FOR EXECUTA
}*/

/*+= ADICIONAR AO CONTADOR +2: for(let i =0 ; i < nomes.length ;  i+=2){
    console.log(nomes[i]) 
}*/


/*LOOP QUE SIMPLICA O FOR: .FOREACH

nomes.forEach(function(meuItem){
    console.log(meuItem)
})

//ARROW FUNCTION - METODO QUE MOSTRA OS OBJETOS DO ARRAY

nomes.forEach((element) => {
    console.log(element)
})*/

//MAP: METODO QUE SUBSTITUI ALGO EM TODAS AS POSICOES DO ARRAY

nomes.map((element) => {
    console.log(`Meu lutador é ${element}`)
})

//FILTER: FILTRA TODOS OS ELEMENTOS QUE POSSUEM A LETRA A NO NOME 

nomes.filter((element) => {
    console.log(element.includes('A'))
})

//FILL: METODO QUE PREENCHE UM VALOR FIXO

//FILTER: FILTRA TODOS OS ELEMENTOS QUE POSSUEM IDADE MENOR QUE 200 ANOS 

pessoas.filter((element) => {
    console.log(element.includes < 200)
})