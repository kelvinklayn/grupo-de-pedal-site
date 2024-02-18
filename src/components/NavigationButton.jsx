import React from 'react';
import { Link } from 'react-router-dom';

function NavigationButton  ({ to, children })  {
  return (
    <div>
    <Link to={to}>
      <button className= "navigationButton">{children}</button>
    </Link>
    </div>
  );
};

export default NavigationButton;