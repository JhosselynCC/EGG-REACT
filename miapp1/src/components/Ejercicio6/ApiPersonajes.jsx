import React, { useState } from 'react'
import { useEffect } from 'react'
import { ObtenerPersonajes } from '../../services/PersonajesService'
import { ObtenerPagina } from '../../services/PersonajesService'
import Personaje from './Personaje'

export default function ApiPersonajes() {

    //usar el useState para personajes
    const [personajes, setPersonajes] = useState([])

    const [paginaActual, setPaginaActual] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(5);

    //usar el useState para Paginacion

    function irPaginaSiguiente() {
        if (paginaActual < totalPaginas) {
            setPaginaActual(paginaActual + 1)
        }
    }

    function irPaginaAnterior() {
        if (paginaActual > 1) {
            setPaginaActual(paginaActual - 1);
        }
    }


    const paginasAMostrar = 5; // Puedes ajustar este valor según tus necesidades

    // Calcula el rango de páginas a mostrar
    const inicio = Math.max(1, paginaActual - Math.floor(paginasAMostrar / 2));
    const fin = Math.min(totalPaginas, inicio + paginasAMostrar - 1);

    const paginacion = [];
    for (let i = inicio; i <= fin; i++) {
        paginacion.push(
            <button key={i} onClick={() => irAPagina(i)}>
                {i}
            </button>
        );
    }

    const irAPagina = (numeroPagina) => {
        if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
            setPaginaActual(numeroPagina);
        }
    };





    //usar el useEffect
    useEffect(() => {

        // ObtenerPersonajes().then(data=>setPersonajes(data))
        //console.log(data))

        ObtenerPagina(paginaActual).then(data => setPersonajes(data))

    }, [paginaActual])


    return (
        <div>
            <div>
                {personajes.map(personaje => <Personaje key={personaje.id} id={personaje.id} name={personaje.name} image={personaje.image} />)
                }
            </div>

            <div>
                <button onClick={irPaginaAnterior}>Página Anterior</button>
                {paginacion}
                <button onClick={irPaginaSiguiente}>Página Siguiente</button>

            </div>

        </div>


    )
}
