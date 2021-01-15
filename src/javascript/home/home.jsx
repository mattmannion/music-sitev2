import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import featured from '../../resources/images/vendor/unsplash/hero-guitar-3.jpg';
import sale from '../../resources/images/vendor/unsplash/hero-guitar-2.jpg';

const home = () => (
  <>
    <div className='home'>
      <div className='home__featured'>
        <img className='home__photo' src={featured} alt='featured photo' />
      </div>
      <div className='home__sale'>
        <img className='home__photo' src={sale} alt='sale photo' />
      </div>
    </div>
  </>
);

export default withRouter(home);
