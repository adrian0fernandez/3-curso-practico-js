console.log("Hello World!");

//Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm^2");

console.groupEnd();

//Código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const baseTriagulo = 4;
const ladoTriangulo2 = 6;

console.log("Los lados del triangulo miden: "+ ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + baseTriagulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriagulo;
console.log("El perímetro del triángulo es de: " + perimetroTriangulo);

const areaTriangulo = (baseTriagulo * alturaTriangulo) / 2;
console.log("El área del triángulo es de: " + areaTriangulo + " cm^2");

console.groupEnd();

//Código de círculos
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo  + " cm");

//Diametro
const diametroCirculo = radioCirculo  * 2;
console.log("El diametro del círculo es: " + diametroCirculo + " cm");

//PI
const PI = Math.PI;
console.log("PI del círculo es: " + PI);

//Circunferencia
const perimetroCirculo = radioCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cms");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo  + "cm^2");

console.groupEnd();
