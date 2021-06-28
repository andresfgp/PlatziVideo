import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  useEffect(() => {
    fetch('http://localhost:3000/initalState') //recibe una API
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className='app'>
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {
            // eslint-disable-next-line react/jsx-props-no-spreading
              videos.mylist.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      )}
      {videos.trends.length > 0 && (
        <Categories title='Tendencia'>
          <Carousel>
            {
            // eslint-disable-next-line react/jsx-props-no-spreading
              videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      )}
      {videos.originals.length > 0 && (
        <Categories title='Originales'>
          <Carousel>
            {
              // eslint-disable-next-line react/jsx-props-no-spreading
              videos.originals.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      )}
      <Footer />
    </div>
  );
};
export default App;
