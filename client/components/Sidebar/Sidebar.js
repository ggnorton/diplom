import React from 'react';
import './sidebar.css';
import OptionListInitial from "../OptionLists/OptionListInitial/OptionListInitial";
import SidebarToggler from "../SidebarToggler/SidebarToggler";
import OptionListCreateSection from "../OptionLists/OptionListCreateSection/OptionListCreateSection";
import OptionListChangeSection from "../OptionLists/OptionListChangeSection/OptionListChangeSection";

import {
  Route,
  Switch
} from 'react-router-dom'


export default class Sidebar extends React.Component{
constructor(props) {
  super(props)
  this.state = {
    content: "initial"
  }
}
  
  render () {
    return(
      <aside className="sidebar">
        <Switch>
          <Route exact path="/" component={OptionListInitial} />
          <Route path="/addSection" component={OptionListCreateSection}/>
          <Route path="/changeSection" component={OptionListChangeSection}/>
        </Switch>
        <SidebarToggler/>
      </aside>
    )
    
    
    /*if (this.state.content === 'initial') {
      return(
        <aside className="sidebar">
          <OptionListInitial/>
          <SidebarToggler/>
        </aside>
      );
    } else if (this.state.content === 'addSection') {
      return(
        <aside className="sidebar">
          <OptionListCreateSection/>
          <SidebarToggler/>
        </aside>
      );
    } else if (this.state.content === 'changeSection') {
      return(
        <aside className="sidebar">
          <OptionListChangeSection/>
          <SidebarToggler/>
        </aside>
      );
    }*/
    
  }
}