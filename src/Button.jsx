import React, { useState } from "react";

// export default function Button({prop}) {
//   return (
//     <button>{prop.valueBtn}</button>
//   ) //jsx la
// }

export default function Button({ valueBtn }) {

  const [inputValue, setImputValue] = useState() //hook de estados, manejo de estados
  const [guardado, setGuardado] = useState()
  
  const renderizarInput = (e) => {
    setImputValue(e.target.value)
  }

  const guardarInput = () =>{
    setGuardado(inputValue)
  }
  return (
    <>
      <input type="text" value={inputValue} onChange={renderizarInput}/>
      <button onClick={guardarInput}>{valueBtn}</button>
      <p>Texto renderizado: {inputValue}</p>
      <p>Texto guardado: {guardado}</p>
    </>
  ); //jsx la
}
