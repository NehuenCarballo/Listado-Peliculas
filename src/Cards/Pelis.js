import React from 'react';
import peliculas from '../Data/peliculas.json';
import Color from '../Codigo/MetascoreColor';
import './Pelis.css';
import UseState from '../Hook/useState';

function Pelis() {
  return (
    <div className="container-div">
      <h1>PelisPlus</h1>
      <UseState />
      <ul>
        {peliculas.map((peliculas, index) => (
          <div key={index}>
            <div className="Container">
              <div>
                <img src={peliculas.poster} className="image" />
              </div>
              <div className="border">
                <h2>{peliculas.title}</h2>
                <p>
                  {peliculas.releaseDate} | {peliculas.duration} |{' '}
                  {peliculas.maturity} |{' '}
                  <strong>{peliculas.genres.join(', ')}</strong>
                </p>
                <p>
                  ★ {peliculas.rating} ☆ Rate{' '}
                  <Color numero={peliculas.metascore} /> <i>Metascore</i>
                </p>
                <p>
                  {peliculas.director} | {peliculas.mainActors.join(', ')}{' '}
                </p>
                <p>{peliculas.plot} </p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Pelis;
