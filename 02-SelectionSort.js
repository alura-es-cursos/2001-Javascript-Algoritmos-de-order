const listaPrecios = require('./Data');
const menorValor = require('./MenorValor');

for(let actual = 0;actual < listaPrecios.length-1;actual++) {
    let posMenorValor = menorValor(listaPrecios, actual);
    let elementoActual = listaPrecios[actual];

    let elementoMenorValor = listaPrecios[posMenorValor];

    listaPrecios[posMenorValor] = elementoActual;
    listaPrecios[actual] = elementoMenorValor;
    
}
console.log(listaPrecios);