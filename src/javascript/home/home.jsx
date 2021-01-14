import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const home = () => (
  <>
    <div className='home'>
      <Link to='/product'>To Product</Link>
    </div>
  </>
);

export default withRouter(home);
