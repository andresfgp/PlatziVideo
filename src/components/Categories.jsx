import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => { //children es un componente hijo que se pasa por medio de los props, el cual se llama directamente
  return (
    <div className='categories'>
      <h3 className='categories__title'>{title}</h3>
      {children}
    </div>
  );
};

export default Categories;
