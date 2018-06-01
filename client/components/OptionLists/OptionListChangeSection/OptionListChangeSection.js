import React, {Component} from 'react';
import '../optionList.css';
import OptionString from "../../OptionString/OptionString";
import OptionButton from "../../OptionButton/OptionButton";
import {Link} from 'react-router-dom'
import ChangePickSection from "./ChangePickSection/ChangePickSection";

export default class OptionListChangeSection extends Component{
  render (){
    return(
      <div className="option-list">
        <button className={"create-submit"}>Выбрать секцию</button>
        <OptionString text={"Ширина секции"} value={"100"} maxLenght={3} property={"%"} />
        <OptionString text={"Высота секции"} value={"25"} maxLenght={3} property={"%"} />
        <ChangePickSection/>
        <Link to='/' className={"option-button_back"}><OptionButton text={"Назад"} /></Link>
      </div>
    )
  }
}