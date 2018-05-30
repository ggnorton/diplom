import React, {Component} from 'react';
import '../optionList.css';
import OptionString from "../../OptionString/OptionString";
import OptionButton from "../../OptionButton/OptionButton";
import {Link} from 'react-router-dom'

export default class OptionListCreateSection extends Component{
  render (){
    return (
      <div className="option-list">
        <Link to=''><OptionButton text={"Назад"} /></Link>
        <OptionString text={"Ширина секции"} value={"100"} maxLenght={3} property={"%"} />
        <OptionString text={"Высота секции"} value={"25"} maxLenght={3} property={"%"} />
        <OptionString text={"Количество подсекций"} value={"1"} maxLenght={3} property={""} />
        <button className={"create-submit"}>Создать секцию</button>
      </div>
    )
  }
}