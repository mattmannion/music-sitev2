import { Image, Video, Transformation } from 'cloudinary-react';
// import featured from '../../resources/images/vendor/hero-guitar-3-sm.webp';
import sale from '../../resources/images/vendor/hero-guitar-2-sm.webp';

const featured =
  'https://ik.imagekit.io/oakzwsyu1x1/hero-guitar-3_8mFWLEFXt.jpg';

const test =
  ' https://res.cloudinary.com/dtdss7awy/image/upload/v1613329986/sample.jpg ';

const cloudName = 'dtdss7awy';

const home = () => (
  <>
    <main className='home fade-in-fx'>
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
            width='27px'
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
    </main>
  </>
);

//dtdss7awy

// <div>
//   <Image
//     cloudName={cloudName}
//     publicId='samples/sheep'
//     width='600'
//     crop='scale'
//   />
//   <Video
//     className='home__video'
//     cloudName={cloudName}
//     sourceTypes={['mp4']}
//     controls
//     publicId='samples/sea-turtle'
//     width='600'
//     crop='scale'
//   />
// </div>
export default home;
