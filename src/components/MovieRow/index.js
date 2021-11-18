
import React from 'react';
import './MovieRow.css';

export default ({title, items}) => {
    return(
        <div className="movie-row">
            <h2>{title}</h2>

            <div className="movie-row-list-area">
                <div className="movie-row-list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movie-row-item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}