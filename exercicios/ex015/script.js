function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtanto')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano){window.alert('[ERRO]verifique os dados e tente novamente!')}
} else { 
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = `idade calculada $(idade)`
    
}