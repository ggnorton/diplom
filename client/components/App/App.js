import React from 'react';
import './app.css';
import Sidebar from "../Sidebar/Sidebar.js";
import Header from "../Header/Header";

class App extends React.Component {
  render() {
    return (
     <div className='home-page flex'>
       <Header/>
      </div>
    );
  }
}

export default App;