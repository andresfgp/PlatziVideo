import React from 'react';
import '../assets/styles/components/Search.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Search = (props) => {
  const { isHome } = props;
  const inputStyles = classNames('input', {
    isHome,
  });
  return (
    <>
      <section className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
        <input type='text' className={inputStyles} placeholder='Buscar...' />
      </section>
    </>
  );
};

Search.propTypes = {
  isHome: PropTypes.bool,
};

export default Search;
