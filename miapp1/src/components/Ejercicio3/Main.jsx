import React from 'react'
import { Hijo } from './Hijos/Hijo'

export const Main=()=> {
  return (
    <div>
      <h1>Componenetes del Main con Hijo</h1>
      <Hijo name='Chiquito' lastName='Forese'/>
      <Hijo name='Pulgoso' lastName='Moresi'/>
    </div>
  )
}
