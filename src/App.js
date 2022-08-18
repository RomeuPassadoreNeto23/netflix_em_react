import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import './App.css'
import Tmdb from './Tmdb';
import FaeturedMovie from './components/FaeturedMovie'
import Header from './components/Header';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [faeturedData, setFaeturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      // pegando a faetured
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFaeturedData(chosenInfo);
      console.log()


    }
    loadAll();
  }, []);
  useState(() => {
    const scrollListener = async () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }

    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

  }, [])
  return (
    <div className='page'>

      <Header black={blackHeader} />

      {faeturedData &&
        <FaeturedMovie item={faeturedData} />

      }


      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}

      </section>
      <footer>
        feito com <span role="img" aria-label="coração">💖</span>pelo Romeu Passadore Neto
        <br/>
        direitos de imagem para Netflix
        <br/>
        dados pegos do site TheMoviedb.org
      </footer>

    </div>
  );

}