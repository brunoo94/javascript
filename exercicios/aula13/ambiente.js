

/*var c = 1
while (c <= 5) {
    console.log(`Passo ${c}`)
    c++
}
*/
for(var linha = 1; linha <= 10 ; linha++){
    for(var c = 1; c <= 10; c++){
        var num = linha * c
        console.log(`Valor de linha: ${linha}, Valor de coluna ${c}`)
        console.log(`${num}`)
    }
}

