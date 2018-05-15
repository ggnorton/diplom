import React, {Component} from 'react';
import '../optionList.css';
import OptionString from "../../OptionString/OptionString";

export default class OptionListCreateSection extends Component{
  render (){
    return (
      <div className="option-list">
        <OptionString text={"Ширина секции"} value={"100"} maxLenght={3} property={"%"} />
        <OptionString text={"Высота секции"} value={"25"} maxLenght={3} property={"%"} />
        <OptionString text={"Количество подсекций"} value={"1"} maxLenght={3} property={""} />
        <button className={"create-submit"}>Создать секцию</button>
      </div>
    )
  }
}