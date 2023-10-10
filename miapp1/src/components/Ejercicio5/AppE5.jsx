import React, { useState } from 'react'

export default function AppE5() {

    const [contador, SetContador]=useState(0)

    function sumarContador() {
        SetContador(contador+1)
    }

  return (
    <div>
        <p>Texto</p>
      <h1>{contador}</h1>
      <button onClick={sumarContador}>contador sin f/flecha</button>
      {/* <button onClick={() => SetContador((contador) => contador + 1)}>CONTADOR</button> */}
    </div>
  );
}



// <button onClick={() => setCount((count) => count + 1)}

// import React, { useState } from 'react';

// function AppE5() {
//   const [texto, setTexto] = useState('');

//   const handleInputChange = (event) => {
//     setTexto(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Campo de Entrada con onChange</h1>
//       <input
//         type="text"
//         placeholder="Escribe algo..."
//         value={texto}
//         onChange={handleInputChange}
//       />
//       <p>Texto ingresado: {texto}</p>
//     </div>
//   );
// }

// export default AppE5;