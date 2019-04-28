import React, { Component } from 'react';

import Logo from "../../assets/media/logo.svg";

export class Navigation extends Component {
  linkClicked = (e, page) => {
    e.preventDefault();
    console.log(document.getElementById(page));
  }
  render() {
    return (
      <nav>
        <a href="/"><img src={Logo} alt="logo"></img></a>
        <ul>
          <li><a href="#home" onClick={(e) => this.linkClicked(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => this.linkClicked(e, 'about')}>About</a></li>
          <li><a href="#products" onClick={(e) => this.linkClicked(e, 'products')}>Products</a></li>
          <li><a href="#contact" onClick={(e) => this.linkClicked(e, 'contact')}>Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
