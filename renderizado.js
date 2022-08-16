// Definir una función que tome como parámetros el id de una etiqueta html y un array de productos y retorne la impresion de todos los los productos.
// - Reutilizar la función anterior
// - Generar una función con for
// - Generar una función con for in
// - Generar otra función con map
// - Probar los resultados con los datos hardcodeados y evaluar las ventajas de cada opción

function renderizadoFor(idHtml,arrayProductos) {
   for (let i = 0; i < arrayProductos.length ; i++) {
    impresionDom(idHtml,arrayProductos[i])
    
   }
}
let productos = [whisky1,whisky2,whisky1,whisky2,whisky1,whisky2,]
// renderizadoFor("todos", productos)

function renderizadoForIn(idHtml,arrayProductos) {
 for (let producto in arrayProductos) {
    impresionDom(idHtml,arrayProductos[producto])
    }
 }   
// renderizadoForIn("todos",productos)
 

function renderizadoMap(idHtml,arrayProductos) {
    let mapeoArray = arrayProductos.map(producto =>impresionDom(idHtml,producto))
        return mapeoArray
    
}
// renderizadoMap("todos",productos)

// Definir una función que tome como parámetros el id de una etiqueta html y un array de productos y retorne la impresion de los productos con fecha de estacionamiento mayor al 2010.
// - Generar una función con for
// - Generar una función con for in
// - Generar otra función con filter
// - Probar los resultados con los datos hardcodeados y evaluar las ventajas de cada opción


function filterFor(idHtml,arrayProductos) {
   for(let i=0; i<arrayProductos.length; i++){
    if(arrayProductos[i].añoProducto >2010){
        impresionDom(idHtml,arrayProductos[i])
    }
   }
}
// filterFor("mayores",productos)

function filterForIn(idHtml,arrayProductos) {
    for(let producto in arrayProductos){
     if(arrayProductos[producto].añoProducto >2010){
         impresionDom(idHtml,arrayProductos[producto])
     }
    }
 }

//  filterForIn("mayores",productos)


 function filter(idHtml,arrayProductos) {
   let arrayFiltrado = arrayProductos.filter(producto=> producto.añoProducto>2010)
   renderizadoFor(idHtml,arrayFiltrado)
 }

 filter("mayores",productos)