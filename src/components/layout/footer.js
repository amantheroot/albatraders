import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div></div>
        <div>Copyright &copy; {new Date().getFullYear()} Cerebros</div>
      </footer>
    )
  }
}

export default Footer;
