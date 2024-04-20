let num = [1 , 7, 9, 2, 11, 14, 17, 18, 23, 27, 25, 65 ,22] //cria um vetor(array) o primeiro valor do vetor sempre está na casa 0

num[3] = 4 //adiciona valor ao vetor na posição entre []

num.push = 3 //adiciona um valor na ultima posição do vetor

//num.length verifica o tamnho do vetor

//num.sort() organiza o vetor em ordem crescente

console.log(`o vetor tem os seguintes valores: ${num}`)

    console.log('')

console.log(`o primeiro valor do vetor é: ${num[0]}`)

    console.log('') //espaço

console.log(`o tamanho do vetor é: ${num.length}`)

    console.log('') //espaço

console.log(`esse é o vetor organizado em ordem crescente: ${num.sort()}`)

    console.log('') //espaço

 console.log(`A posição do valor 17 é ${num.indexOf(17)}`) //indica a posição do valor

    console.log('') //espaço
    console.log('') //espaço
    console.log('') //espaço
    console.log('') //espaço

/*for(let pos = 0;pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) //versão simplificada para o código acima (só funciona para vetores)
}

