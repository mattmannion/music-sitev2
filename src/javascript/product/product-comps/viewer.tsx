import { VFC } from 'react';

const viewer: VFC<{ viewerItem: string; mainItem: string }> = ({
  viewerItem,
  mainItem,
}) => (
  <>
    <div className='viewer'>
      <div className='viewer__grid'>
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='img-selector'
          width='112px'
          height='75px'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='img-selector'
          width='112px'
          height='75px'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='img-selector'
          width='112px'
          height='75px'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='img-selector'
          width='112px'
          height='75px'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='img-selector'
          width='112px'
          height='75px'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='img-selector'
          width='112px'
          height='75px'
        />
      </div>
    </div>
    <div className='main__item'>
      <img src={mainItem} alt='main item photo' width='500px' height='750px' />
    </div>
  </>
);

export default viewer;
