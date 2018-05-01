import React from 'react';
import './header.css';

class Header extends React.Component{
  render(){
    return(
      <header className="header">
        <h2 className="header__title_top">EasyManage</h2>
        <span className="header__title_bottom">sample</span>
        
      </header>
    );
  }
}

export default Header;