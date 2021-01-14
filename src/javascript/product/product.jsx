import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Product = () => (
  <>
    <div className='product'>
      <Link to='/'>To Home</Link>
    </div>
  </>
);

export default withRouter(Product);
