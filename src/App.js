import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import './App.css'
import Tmdb from './Tmdb';
import FaeturedMovie from './components/FaeturedMovie'
import Header from './components/Header';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [faeturedData, setFaeturedData] = useState(null);
  

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
  return (
    <div className='page'>

      <Header />

      {faeturedData &&
        <FaeturedMovie item={faeturedData} />

      }


      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}

      </section>

    </div>
  );

}