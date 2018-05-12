import React from 'react';
import './sidebarToggler.css';

export default class SidebarToggler extends React.Component{
    constructor(props) {
        super(props);
    }
    
    clickHandler(e) {
      let sidebar = document.querySelector('.sidebar');
      let sidebarToggler = document.querySelector('.sidebar-toggler');
      let wrapper = document.querySelector('.wrapper');
  
      sidebarToggler.onclick = function(){
        if (sidebar.classList.contains('sidebar_opened')){
          sidebar.classList.remove('sidebar_opened');
          wrapper.classList.remove('sidebar_toggled');
        }else{
          sidebar.classList.add('sidebar_opened');
          wrapper.classList.add('sidebar_toggled');
        };
      }
    }
    
    render () {
        return(
            <div class="sidebar-toggler" onClick={this.clickHandler.bind(this)}></div>
        )
    }
}
