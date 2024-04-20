let num = document.getElementById('fnum')
let list = document.getElementById('flist')
let res = document.getElementById('res')
let valores = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function isList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if(isNum(num.value) && !isList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado a Lista`
        list.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function enviar() {
    if(valores.length == 0) {
        window.alert('Adicione valores a lista antes de finalizar.')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML += `<p>Na lista a ${tot} valores cadastrados</p>`
        res.innerHTML += `<p>A soma de todos o valores é ${soma}</p>`
        res.innerHTML += `<p>A média é de ${media}</p>`
        res.innerHTML += `<p>O maior valor informado na lista foi ${maior} </p>`
        res.innerHTML += `<p>O menor valor informado na lista foi ${menor} </p>`
    }
}