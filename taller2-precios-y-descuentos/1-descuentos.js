// PRIMER EJERCICIO DE PRECIOS Y DESCUENTOS
const precioOriginal = 120;
const descuento = 18;

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

 //Console de manera de objeto
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});


// SEGUNDO EJERCICIO DE PRECIOS Y DESCUENTOS
function calculalrPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}