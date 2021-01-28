import { VFC } from 'react';
import logo from '../../resources/icons/ms-icon/ms-icon-70x70.png';
import viewerItem from '../../resources/images/vendor/strat-item-sm.webp';
import mainItem from '../../resources/images/vendor/strat-main.webp';

// components
import Viewer from './product-comps/viewer';
import Details from './product-comps/details';
import Description from './product-comps/description';

const Product: VFC = () => (
  <>
    <div className='product fade-in-fx'>
      <Viewer viewerItem={viewerItem} mainItem={mainItem} />
      <Details viewerItem={viewerItem} logo={logo} />
    </div>
    <Description />
  </>
);

export default Product;
