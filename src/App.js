import React from 'react';
import axios from 'axios';

class App extends React.Component {
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
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // console.log('구조분해', movies);


    // this.setState({ movies: movies }); // 객체의 키와 변수의 이름이 같다면 코드를 축약할 수 있어
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are Ready 22'}</div>;
  }
}

export default App;
