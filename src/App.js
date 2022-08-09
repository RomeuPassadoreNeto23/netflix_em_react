import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import './App.css'
import Tmdb from './Tmdb';
import FaeturedMovie from './components/FaeturedMovie'

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [faeturedData, setFaeturedData] = useState(null); 

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      

    }
    loadAll();
  }, []);
  return (
    <div className='page'>

      {FaeturedMovie && 
          <FaeturedMovie items={faeturedData} /> 

      }


      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}

      </section>

    </div>
  );

}