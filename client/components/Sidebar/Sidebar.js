import React from 'react';
import './sidebar.css';
import OptionListInitial from "../OptionLists/OptionListInitial/OptionListInitial";
import SidebarToggler from "../SidebarToggler/SidebarToggler";
import OptionListCreateSection from "../OptionLists/OptionListCreateSection/OptionListCreateSection";
import OptionListChangeSection from "../OptionLists/OptionListChangeSection/OptionListChangeSection";


export default class Sidebar extends React.Component{
constructor(props) {
  super(props)
  this.state = {
    content: "initial"
  }

  function onChangeContent(state) {
    this.setState({'content': state});
  }

  window.cmsStore = {
    sidebarState: "initial",
    onChangeState: onChangeContent.bind(this)
  }
}
  
  // onChangeContent(content) {
  //     this.setState({content: content})
  //   debugger
  // }
  //
  // getContent() {
  //   switch (this.state.content) {
  //     case 'add section':
  //       return (
  //         <aside className="sidebar">
  //           <OptionListCreateSection/>
  //           <SidebarToggler/>
  //         </aside>
  //       );
  //     case 'initial':
  //       return(
  //         <aside className="sidebar">
  //           <OptionListInitial onChangeContent={this.onChangeContent.bind(this)}/>
  //           <SidebarToggler/>
  //         </aside>
  //       );
  //   }
  // }
  
  render (){
    
    if (this.state.content === 'initial') {
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
    }
    
  }
}