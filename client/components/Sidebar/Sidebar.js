import React from 'react';
import './sidebar.css';

import Sidebar__button from "./Sidebar__button/Sidebar__button";

class Sidebar extends React.Component{
  render(){
    return(
      <aside className="side-menu flex">
        <img src="" alt=""/>
        <Sidebar__button>New page</Sidebar__button>
        <Sidebar__button>Add content</Sidebar__button>
        <Sidebar__button>Change content</Sidebar__button>
        <Sidebar__button>Settings</Sidebar__button>
      </aside>
    );
  }
}

export default Sidebar;