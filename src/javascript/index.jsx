// core-js/stable and reg. runtime
// are needed for babel
import 'core-js/stable';
// only import core-js this once
import 'regenerator-runtime/runtime';
// reg. runtime is for poly-filling
// 'async' calls, import when needed
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// component imports
import Nav from './static/nav';
import Home from './home/home';
import Product from './product/product';
import Footer from './static/footer';

const Routing = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/product' component={Product} />
    </Switch>
    <Footer />
  </Router>
);

ReactDOM.render(
  <>
    <Routing />
  </>,
  document.getElementById('root')
);