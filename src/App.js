import './styles/styles.scss';

import axios from 'axios';

import Loading from './Gallery/Loading';
import Gallery from './Gallery/Gallery';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState({
    loadingStatus: true,
    posts: []
  });

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        'https://michael-boyd.herokuapp.com/posts',
      );
      setData({
        posts: response.data,
        loadingStatus: false
      });
    }

    fetchData();
  }, []);

  function GalleryComponent() {
    if (data.loadingStatus) {
      return <Loading/>
    } else {
      return <Gallery images={data.posts} />
    }
  }

  return (
    <div className="App">
      <GalleryComponent/>
    </div>
  );
}

export default App;
