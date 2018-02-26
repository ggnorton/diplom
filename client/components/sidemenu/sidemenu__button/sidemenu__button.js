import React from 'react';
import './sidemenu__button.css';

class Sidemenu__button extends React.Component{
  render(){
    return(
      <a className = "side-menu__button">{this.props.children}</a>
    );
  }
}

export default Sidemenu__button;