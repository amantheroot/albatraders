import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <h1>ALBA INDUSTRIAL TRADERS</h1>
          <hr/>
        </div>
        <div>
          <div>
            Call Us At:
            <em>91+ 9246282616</em>,
            <em>91+ 9700771676</em>
          </div>
          <ul>
            <li>
              <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-official"></i></a>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i></a>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div>
            Email Us At:
            <em><a href="mailto:albatraders90@gmail.com" rel="noopener noreferrer" target="_blank">albatraders90@gmail.com</a></em>
          </div>
        </div>
        <div>Copyright &copy; {new Date().getFullYear()} Cerebros</div>
      </footer>
    )
  }
}

export default Footer;
