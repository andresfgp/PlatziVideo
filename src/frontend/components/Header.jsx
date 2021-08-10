import React from 'react';
import { connect } from 'react-redux'; //trae el estado al componente, conectandolo con store
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import className from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions'; // action para cerrar sesión
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0; //validacion si user tiene elementos -> user es un objeto
  const handleLogout = () => {
    props.logoutRequest({});// manda un objeto vacio
  };

  const headerClass = className('header', { //cambiar el fondo del header
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/'><img className='header__img' src={logo} alt='Platzi Video' /></Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='' />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <>
              <li><Link to='/'>{user.name}</Link></li>
              <li><Link to='#logout' onClick={handleLogout}>Cerrar Sesión</Link></li>
            </>
          ) :
            <li><Link to='/login'>Iniciar Sesión</Link></li>}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => { //mapea nuestra propiedades del estado que estamos requiriendo
  return {
    user: state.user,
  };
};

const mapDispatchToProps = { //se encarga de todas las acciones que tenemos que enviar a nuestro documento
  logoutRequest,
};

Header.propTypes = {
  user: PropTypes.object,
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header); // conecta los estados traidos y lo que se va enviar dentro de nuestro componente
