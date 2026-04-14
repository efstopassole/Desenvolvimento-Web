import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <h2>Contato</h2>
        <p>Email: contato@meublogdeviagens.com</p>
        <p>Telefone: (11) 1234-5678</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;