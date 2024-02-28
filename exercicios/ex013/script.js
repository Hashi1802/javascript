function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = 08 //data.getHours()

msg.innerHTML = `agora são ${hora}hrs`
if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = 'imagens/manha.png' 
    document.body.style.background = '#FAD2AE'
} else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#FD921E'
} else {
    // BOA NOITE!
    img.src = 'imagens/noite.png'
    document.body.style.background = '#555D91'
}
} 