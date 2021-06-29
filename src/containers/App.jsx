import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className='app'>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {
            // eslint-disable-next-line react/jsx-props-no-spreading
              initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      )}
      {initialState.trends.length > 0 && (
        <Categories title='Tendencia'>
          <Carousel>
            {
            // eslint-disable-next-line react/jsx-props-no-spreading
              initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      )}
      {initialState.originals.length > 0 && (
        <Categories title='Originales'>
          <Carousel>
            {
              // eslint-disable-next-line react/jsx-props-no-spreading
              initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      )}
      <Footer />
    </div>
  );
};
export default App;
