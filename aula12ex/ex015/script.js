function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtdata')
    var res = document.querySelector('div#res')

    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
     }else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-m.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }

        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-f.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-f.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulta-f.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'idosa-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
        
}
        
        


