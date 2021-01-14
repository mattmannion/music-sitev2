import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const home = () => <Link to='/product'>To Product</Link>;

export default withRouter(home);
