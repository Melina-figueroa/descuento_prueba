let precioProducto: number = Number(prompt("ingresePrecio"));
let porcentajeDescuento: number = Number(0.1);
let descuento: number = Number(precioProducto * porcentajeDescuento);
let precioFinal: number = precioProducto - descuento;
console.log(precioFinal);
