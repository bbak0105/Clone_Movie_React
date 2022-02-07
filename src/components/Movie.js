import React from 'react';
import propTypes from 'prop-types';
import './Movie.css'

function Movie({ year, title, summary, poster, genres}) {
    return(
        <div className='movie'>
            <img src={poster} alt={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className='movie__genres'>
                    {genres.map((genre, index) => {
                        return (
                            <li 
                                key={index}
                                className='movie__genre'
                            >
                                {genre}
                            </li> 
                        )
                    })}
                </ul>
                {/* 시놉시스 180자로 제한하기 */}
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )
}

// id는 자료형이 Number이고, 반드시 있어야 하니까 isRequired로 작성함
Movie.propTypes = { 
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired, //poster 사진
    genres: propTypes.arrayOf(propTypes.string).isRequired //문자열의 배열
}; 

export default Movie;