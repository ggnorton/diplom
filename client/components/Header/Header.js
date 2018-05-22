import React from 'react';
import './header.css';
import Section from "../Section/Section";
import Subsection from "../Subsection/Subsection";
//import logo from '../../static/logo-ex-7.png';

export default class Header extends React.Component{
  render(){
    return(
      <header className="header section">
        <Section>
          <Subsection/>
          <Subsection/>
          <Subsection/>
        </Section>
      </header>
    );
  }
}
