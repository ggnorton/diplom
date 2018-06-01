import React, {Component} from 'react';
import '../../optionList.css';
import OptionString from "../../OptionString/OptionString";
import OptionButton from "../../OptionButton/OptionButton";
import {Link} from 'react-router-dom'

export default class OptionListChangeSubection extends Component{
  render (){
    return(
      <div className="option-list">
        <span>Текст подсекции:</span>
        <textarea></textarea>
        <select className={"select_color"}>
          <option>White</option>
          <option>Black</option>
          <option>Blue</option>
          <option>Green</option>
          <option>Red</option>
        </select>
        <button>Удалить подсекцию</button>
      </div>
    )
  }
}