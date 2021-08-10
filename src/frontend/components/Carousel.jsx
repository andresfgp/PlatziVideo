import React from 'react';
import '../assets/styles/components/Carousel.scss';
import PropTypes from 'prop-types';

const Carousel = (props) => {
  const { children } = props;

  return (
    <>
      <section className='carousel'>
        <div className='carousel__container'>
          {children}
        </div>
      </section>
    </>
  );
};
Carousel.propTypes = {
  children: PropTypes.array,
};
export default Carousel;
