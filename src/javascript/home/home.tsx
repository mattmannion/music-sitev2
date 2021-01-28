import featured from '../../resources/images/vendor/unsplash/hero-guitar-3-sm.jpg';
import sale from '../../resources/images/vendor/unsplash/hero-guitar-2-sm.jpg';

const home = () => (
  <>
    <div className='home'>
      <div className='home__flex-container'>
        <div className='home__featured'>
          <img
            className='home__photo home__photo-lg'
            src={featured}
            alt='featured photo'
            width='600px'
            height='400px'
          />
        </div>
        <div className='home__sale'>
          <img
            className='home__photo home__photo-sm'
            src={sale}
            alt='sale photo'
            width='270px'
            height='400px'
          />
        </div>
      </div>
      <div className='home__flex-container'>
        <div className='home__info-boxes home__box-1'>
          <p></p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            harum.
          </p>
        </div>
        <div className='home__info-boxes home__box-2'>
          <p></p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
            similique.
          </p>
        </div>
        <div className='home__info-boxes home__box-3'>
          <p></p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
            similique.
          </p>
        </div>
        <div className='home__info-boxes home__box-4'>
          <p></p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
            similique.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default home;
