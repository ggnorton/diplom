import React from 'react';
import './sidemenu.css';

import Sidemenu__button from "./sidemenu__button/sidemenu__button";

class Sidemenu extends React.Component{
  render(){
    return(
      <aside className="side-menu flex">
        <img src="" alt=""/>
        <Sidemenu__button>New page</Sidemenu__button>
        <Sidemenu__button>Add content</Sidemenu__button>
        <Sidemenu__button>Change content</Sidemenu__button>
        <Sidemenu__button>Settings</Sidemenu__button>
      </aside>
    );
  }
}

export default Sidemenu;