import React from 'react';
import './header.css';

export default class Header extends React.Component{
  render(){
    return(
      <header className="header">
        <div className="logo"></div>
        <div className="contacts"></div>
      </header>
    );
  }
}
