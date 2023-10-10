import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

 <nav>
    <ul>
        <li>
        <Link to="/1" >Ejercico 1 </Link>
        </li>

        <li>
        <Link to="/2" >Ejercico 2 </Link>
        </li>

        <li>
        <Link to="/3" >Ejercico 3 </Link>
        </li>

        <li>
        <Link to="/4" >Ejercico 4 </Link>
        </li>

        <li>
        <Link to="/5" >Ejercico 5</Link>
        </li>

        
        <li>
        <Link to="/6" >Ejercico 6 </Link>
        </li>
        
    </ul>
 </nav>

  )
}
