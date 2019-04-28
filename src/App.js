import React, { Component } from 'react';

import Layout from  "./components/layout";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Products from "./components/pages/products";
import Contact from "./components/pages/contact";

class App extends Component {
  render() {
    return (
      <Layout>
        <Home/>
        <About/>
        <Products/>
        <Contact/>
      </Layout>
    );
  }
}

export default App;
