// Internal Imports
import { useState, useEffect } from 'react';

// Components
import { HeadlinesComponent, Searchbar, Loader, Footer } from './components';

// Configs
import { END_POINT } from './config';

function fetchNews(url, setResponse, setError, setLoading = () => {}) {
  setLoading(true);
  fetch(url)
    .then(data => data.json())
    .then(res => {
      setResponse(res);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    })
}

function searchFunction(category, setResponse, setError, setLoading = () => {}) {
  const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  fetchNews(url, setResponse, setError, setLoading);
}


const App = () => {

  const [topHeadlines, setTopHeadlines] = useState({
    articles: [],
    totalResults: 0,
    status: 'unfetched'
  })
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchNews(END_POINT, setTopHeadlines, setError, setLoading);
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        padding: '1em 5em',
        background: '#A9A9A9',
        borderTop: '4px solid black',
        overflowX: 'hidden',
      }}
    >
      {/* <NavBar /> */}
      <h1 style={{
        fontSize: '4em',
        textAlign: 'center'
      }}>NewsBreeze</h1>
      <p style={{
        textAlign: 'center',
        margin: '15px auto',
        width: '80%',
      }}>NewsBreeze is a comprehensive and user-friendly news application that keeps you updated with the latest news from around the world. With a sleek design and intuitive interface, NewsBreeze provides a seamless news consumption experience for users of all ages.</p>

      <Searchbar value={searchValue} setValue={setSearchValue} onClick={() => {
        searchFunction(searchValue, setTopHeadlines, setError, setLoading);
      }} />
      
      <div style={{
        margin: '20px 0px'
      }}>
        {loading ? <Loader /> : <HeadlinesComponent error={error} data={topHeadlines} title={searchValue} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
