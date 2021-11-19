
import React, {useEffect, useState} from 'react';

import Tmdb from './Tmdb';
import Header from './components/Header'
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

import './App.css';

export default () => {
    const [movieList, setMovieList] = useState([]);
    const [featureData, setFeatureData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            // Captura a lista total
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            // Captura a feature
            let originals = list.filter(i => i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            
            setFeatureData(chosenInfo);
        }

        loadAll();
    }, []);

    useEffect(() => {
        //Oculta a apresenta a className black no header
        const scrollListener = () => {
            window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false)   
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return(
        <div className="page">
            <Header black={blackHeader} />
            
            {featureData && <FeaturedMovie item={featureData} />}

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>

            <footer>
                Desenvolvido por <b>Yuri Aguiar</b>
                <br/>Direitos de imagem Netflix
            </footer>
            
            {movieList.length <= 0 &&
                <div className="loading">
                    <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
                </div>
            }
        </div>
    );
}