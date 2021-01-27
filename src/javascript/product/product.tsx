import { withRouter } from 'react-router-dom';

// components
import Viewer from './product-comps/viewer';
import Details from './product-comps/details';
import Description from './product-comps/description';

const Product = () => (
  <>
    <div className='product'>
      <Viewer />
      <Details />
    </div>
    <Description />
  </>
);

export default withRouter(Product);
