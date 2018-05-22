import React from 'react';
import './sidebar.css';
import OptionListInitial from "../OptionLists/OptionListInitial/OptionListInitial";
import SidebarToggler from "../SidebarToggler/SidebarToggler";
import OptionListCreateSection from "../OptionLists/OptionListCreateSection/OptionListCreateSection";


export default class Sidebar extends React.Component{
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     content: "initial"
  //   }
  // }
  
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
    
    //return this.getContent.bind(this)
    return(
      <aside className="sidebar">
        {
          //this.state.content === 'add section' ?
          <OptionListCreateSection/>
        }
        <SidebarToggler/>
      </aside>
    );
  }
}