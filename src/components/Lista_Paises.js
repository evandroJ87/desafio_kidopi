import React from 'react'
import { useState } from 'react';

const Lista_Paises = () => {
  const [pais, setPais] = useState();
  console.log(pais);
  return (
    <div>
      <form>
      <label>
    <span>Lista de Países:
        <select name="pais" onChange={(e)=>setPais(e.target.value)} value={pais} >
            <option value="Brazil">Brazil</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
        </select>
    </span>
    </label>
    <input type="submit" value="Enviar" />
    </form>
    </div>
  )
}
export default Lista_Paises;