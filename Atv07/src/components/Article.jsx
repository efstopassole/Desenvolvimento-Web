import React from 'react';

const Article = ({ title, author, date, content }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>Publicado por: {author} em: <time datetime={date}>{date}</time></p>
      <p>{content}</p>
      <figure>
        <img src="img1.jpg" alt="Praia de Porto de Galinhas" />
        <figcaption>Vista aérea de uma das piscinas naturais mais famosas da região.</figcaption>
      </figure>
      <p>
        Além das praias, a gastronomia local é um capítulo à parte. Experimentar o acarajé na Bahia 
        ou o bolo de rolo em Pernambuco é uma experiência obrigatória.
      </p>
    </article>
  );
};

export default Article;