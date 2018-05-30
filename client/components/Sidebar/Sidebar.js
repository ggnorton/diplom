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


export default class Sidebar extends React.Component {  
  render () {
    return (
      <aside className="sidebar">
        <Switch>
          <Route exact path="/" component={OptionListInitial} />
          <Route path="/addSection" component={OptionListCreateSection}/>
          <Route path="/changeSection" component={OptionListChangeSection}/>
        </Switch>
      </aside>
    )    
  }
}