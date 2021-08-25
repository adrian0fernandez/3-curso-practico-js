/* const lista1 = [
    100,
    200,
    300,
    400,
    500,
];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 +  lista1[i];
}

const prompedioLista1 = sumaLista1/lista1.length; */

// Ciclo for para calculaMediaAritmetica()

/* function calculaMediaAritmetica(lista) {
let sumaLista = 0;
 for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista +  lista[i];
}

const prompedioLista = sumaLista/lista.length;
return prompedioLista;
} */

//reduce() es un método que hace que se suman los elementos de una lista
function calculaMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
    );
    
const prompedioLista = sumaLista/lista.length;
return prompedioLista;
}