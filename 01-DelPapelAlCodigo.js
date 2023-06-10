const listaPrecios = [
    {
        nombre: 'PHP',
        precio: 20,
    },
    {
        nombre: 'Python',
        precio: 25,
    },
    {
        nombre: 'Javascript',
        precio: 30,
    },
    {
        nombre: 'Java',
        precio: 45,
    },
    {
        nombre: 'Goland',
        precio: 35,
    }
];

let menor = 0;

for(let actual = 0;actual < listaPrecios.length;actual++) {
    if (listaPrecios[actual].precio < listaPrecios[menor].precio) {
        menor = actual;
    }
}

console.log(`El libro con menor precio es: ${listaPrecios[menor].nombre}`);
console.log(`El precio menor de la lista es ${listaPrecios[menor].precio}`);
console.log(`La posición del menor precio de la lista es ${menor}`);

