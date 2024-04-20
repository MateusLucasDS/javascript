function gerar() {
    var num = document.querySelector('input#tab')
    
    
    
    for(var multi = 0 ; multi <= 10 ; multi++){
        var res = Number(num.value) * multi 
        var tabu = document.getElementById(multi)
        tabu.style.display = 'block'

        tabu.innerHTML = `${Number(num.value)} x ${multi} = ${res}`
        
    }
}