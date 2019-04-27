import React, { Component } from 'react';
import { connect } from "react-redux";

import {BrowserRouter, Switch, Route} from  "react-router-dom";

import Layout from  "./components/layout";
import Home from "./components/pages/home";
import Products from "./components/pages/products";
import Contact from "./components/pages/contact";
import NotFound from "./components/pages/notfound";

const mapStateToProps = store => {
  return {
    store: store.stateReducer.state
  };
};

class toConnectApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const App = connect(mapStateToProps)(toConnectApp);

export default App;
