function calcular() {
    var ini = document.querySelector('input#txti') //getElementById('txti')
    var fim = document.querySelector('input#txtf') //getElementById('txtf')
    var pas = document.querySelector('input#txtp') //getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel calcular.'
    }else {
        res.innerHTML = 'Contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        /*if (p == 0){
            window.alert = 'Passo invalido, considerando passo 1'
            p = 1
        }*/
        //if (i < f) {
            for(var c = 1 ; c <= f ; c += p){
                res.innerHTML += `${c} \u{1F449}`
            //}
        }else{
            for(var c = 1 ; c >= f ; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML = `\u{1F3C1}`
    }
}