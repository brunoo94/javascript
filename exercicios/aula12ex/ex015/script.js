function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebe-homem.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'adolescente-homem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homem.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebe-mulher.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'adolescente-mulher.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.fontStyle = 'italic'
        res.style.padding = '10px'
        res.innerHTML = ` ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }  
}