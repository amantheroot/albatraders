import React, { Component } from 'react';

import {Link} from "react-router-dom";

import Logo from "../../assets/media/logo.svg";

export class Navigation extends Component {
  render() {
    return (
      <nav>
        <Link to="/"><img src={Logo} alt="logo"></img></Link>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/products">Products</Link></li>
          <li><Link to ="/contact">Contact</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
