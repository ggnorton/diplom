import React from 'react';
import './app.css';
import Sidebar from "../Sidebar/Sidebar.js";
import Wrapper from "../Wrapper/Wrapper";

export default class App extends React.Component {
  render () {
    return (
     <div className='home-page flex'>
       <Sidebar/>
       <Wrapper/>
     </div>
    );
  }
}