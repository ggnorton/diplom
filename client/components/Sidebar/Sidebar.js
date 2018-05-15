import React from 'react';
import './sidebar.css';
import OptionListInitial from "../OptionLists/OptionListInitial/OptionListInitial";
import SidebarToggler from "../SidebarToggler/SidebarToggler";
import OptionListCreateSection from "../OptionLists/OptionListCreateSection/OptionListCreateSection";


export default class Sidebar extends React.Component{
  render (){
    return(
      <aside className="sidebar">
        <OptionListCreateSection/>
        <SidebarToggler/>
      </aside>
    );
  }
}