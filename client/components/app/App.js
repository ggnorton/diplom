import React from 'react';
import './app.css';
import Sidemenu from "../sidemenu/sidemenu.js";

class App extends React.Component {
  render() {
    return (
     <div className='home-page flex'>
       
       <Sidemenu/>
      </div>
    );
  }
}

export default App;