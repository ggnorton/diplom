import React from 'react';
import './home.css';
import Sidemenu from "../sidemenu/sidemenu.js";

class Home extends React.Component {
  render() {
    return (
     <div className='home-page flex'>
       <Sidemenu/>
      </div>
    );
  }
}

export default Home;