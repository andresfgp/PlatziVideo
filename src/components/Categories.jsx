import React from 'react';
import '../assets/styles/components/Categories.scss';
import PropTypes from 'prop-types';

const Categories = (props) => { //children es un componente hijo que se pasa por medio de los props, el cual se llama directamente
  const { children, title } = props;
  return (
    <div className='categories'>
      <h3 className='categories__title'>{title}</h3>
      {children}
    </div>
  );
};

Categories.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
};
export default Categories;
