let cantidad = -1

while(cantidad<0 || isNaN(cantidad)){
    cantidad = parseInt(prompt("ingrese cantidad "))
    console.log(cantidad);
}

// Pedir con PROMPT los datos de cada vino (nombre, varietal, foto y fecha de estacionamiento del vino).
// - Utilizar la estructura del for para realizar los pedidos de datos la cantidad de veces necesaria.
// - Utilizar la estructura de while para condicionar cada dato (al menos 4 caracteres y que el año sea un número mayor a 1900).
// - Guardar los datos en un objeto.
// - Agregar al objeto una propiedad id con alguna cuenta random para su cálculo.
// - Agrega el objeto al array que estamos construyendo con todos los productos.
let arrayWhisky = []

if(cantidad>0){
    for (let i = 1; i <= cantidad; i++) {
        let marcaProducto = ""
        while(marcaProducto.length<4){
            marcaProducto = prompt("ingrese la marca del whisky "+ i + " :")
            // console.log(marcaProducto);
        }
        let origenProducto = ""
        while(origenProducto.length<4){
            origenProducto = prompt("ingrese el origen del whisky "+ marcaProducto)
            // console.log(origenProducto);
        }
        let fotoProducto = ""
        while(fotoProducto.length<10){
            fotoProducto = prompt("ingrese la foto del whisky "+ marcaProducto + " origen " + origenProducto);
            // console.log(fotoProducto);
        }
        let añoProducto = ""
        while(isNaN(añoProducto) || añoProducto<1900){
            añoProducto = parseInt(prompt("ingrese el año del whisky "+ marcaProducto + " origen " + origenProducto + " :"));
            // console.log(añoProducto);
        }
        let whisky = {
            Marca: marcaProducto,
            Origen: origenProducto,
            Foto: fotoProducto,
            Año: añoProducto, 
        }
      
        whisky.id = Math.floor(Math.random()*1000)
        console.log(whisky);
        arrayWhisky.push(whisky)
    }
}
console.log(arrayWhisky)