// Internal Imports
import { useState, useEffect } from 'react';

// Components
import {HeadlinesComponent} from './components';

// Configs
import { END_POINT } from './config';

function fetchNews(url, setResponse, setError) {
  fetch(url)
  .then(data => data.json())
  .then(res => {
    setResponse(res);
  })
  .catch(err => {
    setError(err);
  })
}


const App = () => {


  const [topHeadlines, setTopHeadlines] = useState({
    articles: [],
    totalResults: 0,
    status: 'unfetched'
  })
  const [error, setError] = useState("");

  useEffect(() => {
    fetchNews(END_POINT, setTopHeadlines, setError);
  }, []);

  useEffect(() => {
    console.log(topHeadlines);
  }, [topHeadlines]);

  return (
    <div 
      style={{
        width: '100vw',
        minHeight: '100vh',
        padding: '1em 5em',
        background: '#f2f2f2',
        borderTop: '4px solid black'
      }}
    >
      <h1 style={{
        fontSize: '4em',
        textAlign: 'center'
      }}>news.breeze</h1>
      <p style={{
        textAlign: 'center',
        margin: '15px auto',
        width: '80%',
      }}>NewsBreeze is a comprehensive and user-friendly news application that keeps you updated with the latest news from around the world. With a sleek design and intuitive interface, NewsBreeze provides a seamless news consumption experience for users of all ages.</p>
    
      <div style={{
        margin: '10px 0px'
      }}>
        <HeadlinesComponent error={error} data={topHeadlines}/>
      </div>
    </div>
  );
}

export default App;
