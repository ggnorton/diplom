import React from 'react';
import './wrapper.css';
import Header from "../Header/Header";

class Wrapper extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <Header/>
            </div>
        )
    }
}

export default Wrapper;