import React from 'react';
// import Header from './Header';
import PropTypes from 'prop-types';
import Footer from './Footer';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <div className='App'>
        {/* <Header /> */}
        {children}
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
