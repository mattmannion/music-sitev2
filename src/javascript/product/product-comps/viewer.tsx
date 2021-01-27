import React from 'react';
import viewerItem from '../../../resources/images/vendor/unsplash/strat-item.jpg';
import mainItem from '../../../resources/images/vendor/unsplash/strat-main.jpg';

const viewer = () => (
  <>
    <div className='viewer'>
      <div className='viewer__grid'>
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='img-selector'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='img-selector'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='img-selector'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='img-selector'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='img-selector'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='img-selector'
        />
      </div>
    </div>
    <div className='main__item'>
      <img src={mainItem} alt='main item photo' />
    </div>
  </>
);

export default viewer;
