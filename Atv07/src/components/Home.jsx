import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Article from './Article';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Home() {
  const postData = {
    title: "Descobrindo as Praias do Nordeste",
    author: "João Silva",
    date: "2025-08-15",
    content: "O Nordeste brasileiro é um verdadeiro paraíso na Terra. Com águas cristalinas e areias brancas, lugares como Porto de Galinhas e Maragogi encantam turistas do mundo inteiro."
  };

  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <Article 
          title={postData.title} 
          author={postData.author} 
          date={postData.date} 
          content={postData.content} 
        />
      </main>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Home;