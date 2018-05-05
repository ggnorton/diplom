import React from 'react';
import './sidebar__button.css';

class Sidebar__button extends React.Component{
  render(){
    return(
      <a className="side-menu__button">{this.props.children}</a>
    );
  }
}

export default Sidebar__button;