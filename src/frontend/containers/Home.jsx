import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import Header from '../components/Header';

const Home = (props) => {
  const { searchResult, myList, trends, originals } = props;
  return (
    <>
      <Header />
      <Search isHome />
      {searchResult.length > 0 && (
        <Categories title='Video buscado'>
          <Carousel>
            {
              searchResult.map((item) => (
                <CarouselItem
                  key={item.id}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...item}
                />
              ))
            }
          </Carousel>
        </Categories>
      )}
      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {
              myList.map((item) => (
                <CarouselItem
                  key={item.id}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...item}
                  isList
                />
              ))
            }
          </Carousel>
        </Categories>
      )}
      {trends.length > 0 && (
        <Categories title='Tendencia'>
          <Carousel>
            {
              // eslint-disable-next-line react/jsx-props-no-spreading
              trends.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      )}
      {originals.length > 0 && (
        <Categories title='Originales'>
          <Carousel>
            {
              // eslint-disable-next-line react/jsx-props-no-spreading
              originals.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

Home.propTypes = {
  searchResult: PropTypes.array,
  myList: PropTypes.array,
  trends: PropTypes.array,
  originals: PropTypes.array,
};
export default connect(mapStateToProps, null)(Home); //connect(props,actions)
