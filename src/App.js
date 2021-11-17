
import React, {useEffect, useState} from 'react';

import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

import './App.css';

export default () => {
    const [movieList, setMovieList] = useState([]);
    const [featureData, setFeatureData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            // Captura a lsita total
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

    return(
        <div className="page">
            {featureData && <FeaturedMovie item={featureData} />}

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
        </div>
    );
}