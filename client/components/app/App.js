import React from 'react';
import './app.css';
import Sidemenu from "../sidemenu/sidemenu.js";
import Header from "../Header/Header";

class App extends React.Component {
  render() {
    return (
     <div className='home-page flex'>
       <Header/>
       <Sidemenu/>
      </div>
    );
  }
}

export default App;