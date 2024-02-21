const prompt= require('prompt-sync')()

//var, let e const

function teste(){
    var nome1 = 'caio'
    console.log(nome1)
}
//a variavel só existe dentro da function, porém se substituirmos por um if, podemos colocar o console fora 

teste()

//hosting
printar()

function printar(){
    console.log("Hello")
}

//é possivel modificar caracteristicas da const, como o metodo toUpperCase 
const nome2= 'Dom'

console.log(typeof nome2) //corrige erros

//prompt retorna uma string 

//${concatenacao, soma e if (reduzido: ===condicao ?verdadeiro :falso)}

//metodos e propriedades: ex lenght, replace (substituir caractere, 1 quem voce quer substituir e 2 quem voce vai trocar)

//random gera um numero aleatorio, floor arredonda 
console.log(Math.floor(Math.random()* 10))

