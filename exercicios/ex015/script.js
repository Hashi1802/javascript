function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtanto')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){window.alert('[ERRO]verifique os dados e tente novamente!')
    } else { 
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    //img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if(idade >= 0 && < 10) {}
    } else if (fsex[1].checked) {
        genero = 'mulher'
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
    
}