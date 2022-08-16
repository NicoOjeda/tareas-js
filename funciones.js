// Definir una función que tome como parámetros los datos del producto y retorne un template string.
// - Utilizar el HTML ya desarrollado por el equipo de front

function plantilla(objeto) {
    let marcaCorrecta = objeto.marcaProducto.charAt(0).toUpperCase()+ objeto.marcaProducto.slice(1).toLowerCase()
    let origenCorrecto = objeto.origenProducto.charAt(0).toUpperCase()+ objeto.origenProducto.slice(1).toLowerCase()
    return `<div class="card" id=${objeto.id} style="width: 18rem;">
                        <img src=${objeto.fotoProducto} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Nombre: ${marcaCorrecta}</h5>
                            <p class="card-text">Origen: ${origenCorrecto}</p>
                            <p class="card-text">Año: ${objeto.añoProducto}</p>
                        </div>
                    </div>
                    `

}

console.log(plantilla(whisky2))



// Definir una función que tome como parámetros el id de una etiqueta html y los datos del producto para:
// - Reutilizar la función anterior
// - Realizar una impresión de ese template string en el DOM.
// Subir los archivos a la rama correspondiente de github (git add, git commit, git push), armar la pull request y si no hay conflictos: mergear

function impresionDom(idHtml,objeto) {
    let impresion = plantilla(objeto)
    let contenedor = document.getElementById(`${idHtml}`)
    contenedor.innerHTML += impresion
}

// impresionDom("todos",whisky1)
// impresionDom("todos",whisky1)
// impresionDom("todos",whisky1)