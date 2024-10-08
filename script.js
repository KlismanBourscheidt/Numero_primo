const prompt = require("prompt-sync")()
let numDivisores = 0 //declara contador

console.log('Digite 0 para sair')
do{
    const num = Number(prompt('Digite um numero para verificar se é primo: '))
    if(num == 0 || isNaN(num)){
        const sair = prompt('Confirma sair do programa? [s] ou [n] ')
        if(sair == 's'){
            break
        }else{
            continue
        }
    }
    for(let i = 2; i <= num/2; i ++){
        if(num % i == 0){           // faz a contagem de divisoes
            numDivisores = 1
            break
        }
    }

    if(num == 1){
        console.log(`${num} nao é um numero primo`)
        numDivisores = ""
    }else if(numDivisores > 1 || !numDivisores){
        console.log(`${num} é um numero primo`)
        numDivisores = ""
    }else{
        console.log(`${num} Não é um numero primo.`)
        numDivisores = ""
    }

}while(true){
    console.log('bye bye')
}