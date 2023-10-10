

export async function ObtenerPersonajes(params) {
    // fetch('https://rickandmortyapi.com/api/character')
    // // Exito
    // .then(response => response.json())  // convertir a json
    // .then(json => console.log(json))    //imprimir los datos en la consola
    // .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

    const response= await fetch('https://rickandmortyapi.com/api/character')
    const data= await response.json()
    return data.results
}


export async function ObtenerPagina(params) {
    // fetch('https://rickandmortyapi.com/api/character')
    // // Exito
    // .then(response => response.json())  // convertir a json
    // .then(json => console.log(json))    //imprimir los datos en la consola
    // .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

    const response= await fetch(`https://rickandmortyapi.com/api/character?page=${params} ` )
    const data= await response.json()
    return data.results
}