let precioProducto: number = Number(prompt("ingresePrecio")); //este es el valor del producto
let porcentajeDescuento: number = Number(0.1); //desceunto a aplicar
let descuento: number = Number(precioProducto * porcentajeDescuento);
let precioFinal: number = precioProducto - descuento;
console.log(precioFinal);
