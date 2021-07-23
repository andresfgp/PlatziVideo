import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Search.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getSearchVideo } from '../actions';

const Search = (props) => {
  const { isHome, getSearchVideo } = props;

  const handleInput = (event) => { //recopilar informacion del search
    getSearchVideo(event.target.value);
    //console.log(event.target.value);
  };

  const inputStyles = classNames('input', {
    isHome,
  });
  return (
    <>
      <section className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
        <input
          name='search'
          type='text'
          className={inputStyles}
          placeholder='Buscar...'
          onChange={handleInput}
        />
      </section>
    </>
  );
};

Search.propTypes = {
  isHome: PropTypes.bool,
};

const mapDispatchToProps = {
  getSearchVideo,
};

export default connect(null, mapDispatchToProps)(Search);
