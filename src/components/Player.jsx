import React, { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Player.scss';
import Redirect from 'react-router-dom';
import { getVideoSource } from '../actions';

const Player = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line react/destructuring-assignment
  const hasPlaying = Object.keys(props.playing).length > 0; //saber cuantos elemtos tiene playing

  useLayoutEffect(() => { // Hook sincronico
    props.getVideoSource(id); //filtrar con el ID con find
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return hasPlaying ? (
    <div className='player'>
      <video className='player__item' controls autoPlay>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <Redirect to='/NotFound' />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
