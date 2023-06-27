const listaPrecios = require('./Data');

function insertionSort(lista) {
    for(let actual = 0;actual < lista.length;actual++) {
        let analizado = actual;
        while(analizado > 0 && lista[analizado].nombre < lista[analizado-1].nombre) {
            let elementoAnalizado = lista[analizado];
            let elementoAnterior = lista[analizado-1];

            lista[analizado] = elementoAnterior;
            lista[analizado-1] = elementoAnalizado;

            analizado--;

        }
    }
    return lista;
}
console.log(insertionSort(listaPrecios))