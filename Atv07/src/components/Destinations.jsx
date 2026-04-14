import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Destinations = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <h2>Destinos</h2>
        <ul>
          <li>Porto de Galinhas - PE</li>
          <li>Maragogi - AL</li>
          <li>Chapada Diamantina - BA</li>
          <li>Fernando de Noronha - PE</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;