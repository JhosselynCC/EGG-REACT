import React from 'react'

export default function Personaje(props) {
  return (

    <div>
      <h2>ID: {props.id} NAME: {props.name} I
      {/* MG: {props.image} */}

      </h2>
      
      <img src={props.image}  alt={props.name}/>
    </div>

  )
}


