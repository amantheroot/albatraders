import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    products: store.products
  };
};

export class toConnectProducts extends Component {
  render() {
    return (
      <div id="products" className="page">
        <h1>Products {JSON.stringify(this.props.products)}</h1>
      </div>
    )
  }
}

const Products = connect(mapStateToProps)(toConnectProducts);

export default Products;
