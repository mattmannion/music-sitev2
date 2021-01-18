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
          className='viewer__items'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='viewer__items'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='viewer__items'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='viewer__items'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='viewer__items'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='viewer__items'
        />
      </div>
    </div>
    <div className='main__item'>
      <img src={mainItem} alt='main item photo' />
    </div>
  </>
);

export default viewer;
