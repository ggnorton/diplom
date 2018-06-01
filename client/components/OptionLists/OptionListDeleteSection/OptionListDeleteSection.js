import React, {Component} from 'react';
import '../optionList.css';
import OptionString from "../../OptionString/OptionString";
import OptionButton from "../../OptionButton/OptionButton";
import {Link} from 'react-router-dom'

export default class OptionListCreateSection extends Component{
  render (){
    return (
      <div className="option-list">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <Link to='' className={"option-button_back"}><OptionButton text={"Назад"}/></Link>
      </div>
    )
  }
}