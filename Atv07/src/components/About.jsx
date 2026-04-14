import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <h2>Sobre Nós</h2>
        <p>Bem-vindo ao Meu Blog de Viagens! Somos apaixonados por explorar o mundo e compartilhar nossas experiências.</p>
        <p>Nosso objetivo é inspirar você a descobrir novos destinos e viver aventuras incríveis.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;