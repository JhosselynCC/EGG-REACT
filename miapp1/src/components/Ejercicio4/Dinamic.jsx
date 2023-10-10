import React from 'react'
import { useParams } from 'react-router-dom'

export default function Dinamic() {

    const Id=useParams()
  return (
    <div>
      Dinamic (Id)
    </div>
  )
}
