const salariosCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

//Ordenar salarios
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

//Calcular mediana de salarios
function esPar(numerito ){
    return (numerito % 2 === 0)
}

function calculaMediaAritmetica(lista) {
const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
);
const prompedioLista = sumaLista/lista.length;
return prompedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        //media ebtre list
        const mediana = calculaMediaAritmetica([personitaMitad1, personitaMitad2]);

        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

console.log(
    medianaSalarios(salariosCol)
)