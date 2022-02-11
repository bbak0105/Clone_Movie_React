import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    /**
     * async await 필기노트
     * 자바스크립트에게 getMovies() 함수는 시간이 필요하고(async)
     * axios.get()의 실행을 기다려 달라고 말해주는 거야.
     */
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // console.log('movies', movies.data.data.movies);
    const {
      data: {
        data: { movies },
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log('구조분해', movies);


    // this.setState({ movies: movies }); // 객체의 키와 변수의 이름이 같다면 코드를 축약할 수 있어
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies} = this.state;
    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className='="loader__text'>Loading...</span>
          </div>
        ) : (
          <div className='movies'>
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              )
            })}
          </div>
        )}
      </section>
    )
  }
}

export default Home;
