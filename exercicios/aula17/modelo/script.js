let num = document.getElementById('txtn')
let lista = document.getElementById('selnum')
let res = document.getElementById('res')
let n = Number(num.value)
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function calcularMedia(l){
    let soma = Number(0)
    for(let i = 0; i < l.length; i++) {
        soma += Number(l[i]);
    }
    let media = (soma / l.length)
    return media
}

function somaValores(l){
    let soma = Number(0)
    for(let i = 0; i < l.length; i++) {
         soma += Number(l[i])
    }
    return soma
}
    

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
        valores.push(Number(num.value))
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else {
        res.innerHTML = ''
        //[array.length]
        res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados <br><br>`

        //[maior valor do array]  
        let maior = Math.max.apply(null,valores)
        res.innerHTML += `O maior valor informado foi ${maior} <br><br>`

        //[menor valor do array]    
        let menor = Math.min.apply(null,valores)
        res.innerHTML += `O menor valor informado foi ${menor} <br><br>`

        //[A soma de todos valores do array] 
        let totsoma = somaValores(valores)
        res.innerHTML += `Somando todos os valores, temos ${totsoma} <br><br>`

        //[Calculo de média dos valores do array]
        let resulMedia = calcularMedia(valores)
        res.innerHTML += `A média dos valores digitados é ${resulMedia}`
    }
}

function limparDados() {
    location.reload()
}