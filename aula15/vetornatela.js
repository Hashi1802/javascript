let valores = [8, 1, 5, 2, 4, 0]
valores.sort()

/*
for (let pos=0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
} 
for (let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}*/
let pos = valores.indexOf(2)

if (pos == -1) {console.log('o valor não foi encontrado')}
else {
    console.log(`o valor 2 esta na posição ${pos}`)
}