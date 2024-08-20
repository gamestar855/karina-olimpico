import React from 'react';
import './App.css';
import descarga from './img/descarga.jpg'
import fotoolipng from './img/fotoolipng.jpg'
import images from './img/images.jpg'

// Datos de ejemplo para el medallero
const medals = [
  { country: 'USA', gold: 39, silver: 41, bronze: 33 },
  { country: 'China', gold: 38, silver: 32, bronze: 18 },
  { country: 'Japan', gold: 27, silver: 14, bronze: 17 },
];

// Datos de ejemplo para los momentos destacados
const highlights = [
  {
    title: 'Usain Bolt Wins 100m Gold',
    description: 'Usain Bolt breaks the world record in the 100m dash at the Beijing Olympics.',
    image: 'url-to-bolt-image.jpg', // Reemplazar con URL real
  },
  {
    title: 'Michael Phelps Wins 8 Gold Medals',
    description: 'Michael Phelps sets a new record for the most gold medals in a single Olympic Games.',
    image: 'url-to-phelps-image.jpg', // Reemplazar con URL real
  },
];

// Lista de deportes presentados
const sports = [
  'Athletics',
  'Swimming',
  'Gymnastics',
  'Football',
  'Basketball',
  'Tennis',
];

function App() {
  return (
    <div className='fotos'>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> 
      
    
    <div className="App">
      <header className="App-header">
        <h1>Olympic Games</h1>
      </header>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
         <img src={descarga} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={fotoolipng} className="d-block w-100" alt="..."/> 
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={images} className="d-block w-100" alt="..."/> 
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

      <section className="MedalTable">
        <h2>Medal Table</h2>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Gold</th>
              <th>Silver</th>
              <th>Bronze</th>
            </tr>
          </thead>
          <tbody>
            {medals.map((medal, index) => (
              <tr key={index}>
                <td>{medal.country}</td>
                <td>{medal.gold}</td>
                <td>{medal.silver}</td>
                <td>{medal.bronze}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="Highlights">
        <h2>Highlights</h2>
        {highlights.map((highlight, index) => (
          <div key={index} className="Highlight">
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
            <img src={highlight.image} alt={highlight.title} />
          </div>
        ))}
      </section>

      <section className="Sports">
        <h2>Sports Presented</h2>
        <ul>
          {sports.map((sport, index) => (
            <li key={index}>{sport}</li>
          ))}
        </ul>
      </section>
    </div>
    </div>
  );
}


export default App;
