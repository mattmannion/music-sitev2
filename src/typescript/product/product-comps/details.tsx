import { VFC } from 'react';

const details: VFC<{ viewerItem: string; logo: string }> = ({
  viewerItem,
  logo,
}) => (
  <>
    <div className='details'>
      <div className='details__pricing '>
        <div>
          <h6>Buy now:</h6>
          <h1>$1234.56</h1>
        </div>
        <img src={logo} alt='logo icon' height='70px' width='70px' />
      </div>
      <div className='details__perks'>
        <div>
          {/* <img src='' alt='' /> */}
          <span>Quality Assurance</span>
        </div>
        <div>
          {/* <img src='' alt='' /> */}
          <span>Free Shipping</span>
        </div>
        <div>
          {/* <img src='' alt='' /> */}
          <span>24/7 Support</span>
        </div>
        <div>
          {/* <img src='' alt='' /> */}
          <span>1 Year Warrenty</span>
        </div>
      </div>
      <div className='details__add-to-cart'>
        <button className='details__btn'>Add To Cart</button>
        <span>In stock and ready to ship</span>
      </div>
      <div className='details__options'>
        <img
          src={viewerItem}
          alt='options item photo'
          className='img-selector'
          width='112.6px'
          height='75px'
        />
        <img
          src={viewerItem}
          alt='options item photo'
          className='img-selector'
          width='112.6px'
          height='75px'
        />
        <img
          src={viewerItem}
          alt='options item photo'
          className='img-selector'
          width='112.6px'
          height='75px'
        />
        <img
          src={viewerItem}
          alt='options item photo'
          className='img-selector'
          width='112.6px'
          height='75px'
        />
      </div>
    </div>
  </>
);

export default details;
