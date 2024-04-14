function carregar() {
    var msg = document.querySelector('div#msg')
    var foto = document.querySelector('img#imagem')
    var data = new Date()

    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora > 0 && hora <= 12) {
        document.body.style.background = '#f8e53b'
        foto.src = 'foto-manha.jpg'
    }else if (hora > 12 && hora <= 17){
        document.body.style.background = '#e7c920'
        foto.src = 'foto-tarde.jpg'
    }else{
        document.body.style.background = 'purple'
        foto.src = 'foto-noite.jpg'
    }
}
