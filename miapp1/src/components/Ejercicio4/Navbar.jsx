import React from 'react'
import { Link } from 'react-router-dom'
import Main1 from './Main1'
// import Main1 from './Main1'
// import { rutasMain1 } from './Main1'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li> 
          {/* <a href="https://www.instagram.com">Instagram</a> */}
          <Link to="/" >Home </Link>

        </li>

        <li> 
          {/* <a href="https://web.whatsapp.com/">Whatsapp</a> */}
       
         
          <Link to={"/4/Main1"}>Main 1</Link>
       
        </li>

        <li> 
          {/* <a href="https://web.whatsapp.com/">Whatsapp</a> */}
          <Link to={"/4/Main2"} >Main 2 </Link>
        </li>

        <li>
           {/* <a href="https://www.google.com.ar/">Google</a> */}
           <Link to="/ss" >NotFoundPage </Link>
        </li>
      </ul>
    </nav>
  )
}
