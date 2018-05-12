import React from 'react';
import './sidebar.css';
import OptionList from "../OptionList/OptionList";
import SidebarToggler from "../SidebarToggler/SidebarToggler";


export default class Sidebar extends React.Component{
  render (){
    return(
      <aside className="sidebar">
        <OptionList/>
        <SidebarToggler/>
      </aside>
    );
  }
}