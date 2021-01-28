import { VFC } from 'react';
import loadable from '@loadable/component';
import logo from '../../resources/icons/ms-icon/ms-icon-70x70.png';
import viewerItem from '../../resources/images/vendor/unsplash/strat-item.jpg';
import mainItem from '../../resources/images/vendor/unsplash/strat-main.jpg';

// components
const Viewer = loadable(() => import('./product-comps/viewer'));
const Details = loadable(() => import('./product-comps/details'));
import Description from './product-comps/description';

const Product: VFC = () => (
  <>
    <div className='product'>
      <Viewer viewerItem={viewerItem} mainItem={mainItem} />
      <Details viewerItem={viewerItem} logo={logo} />
    </div>
    <Description />
  </>
);

export default Product;
