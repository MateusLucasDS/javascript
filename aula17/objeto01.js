let amigo = {
    nome:'José' , sexo:'M', peso:85, engordar(p=0){
        console.log('Engordou')
        amigo.peso += p
    }
}

amigo.engordar(2.5)
console.log(`${amigo.nome} pesa ${amigo.peso}`)

