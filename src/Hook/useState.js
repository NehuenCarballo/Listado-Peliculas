import React, { useState } from 'react';
import './Style.css';

export default function UseState() {
  const [buscar, buscador] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(buscar);
  }

  return (
    <div className="Submit">
      <form action="" onSubmit={handleSubmit}>
        <input
          value={buscar}
          onChange={(event) => {
            buscador(event.target.value);
          }}
          type="text"
          placeholder="Ingrese su Película"
        />
        <button>Buscar</button>
      </form>
    </div>
  );
}
