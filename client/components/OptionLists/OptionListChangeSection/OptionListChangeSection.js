import React, {Component} from 'react';
import '../optionList.css';
import OptionString from "../../OptionString/OptionString";

export default class OptionListChangeSection extends Component{
  render (){
    return(
      <div className="option-list">
        <button onClick={() => {window.cmsStore.onChangeState('initial')}}>Второе пришествие</button>
        <button className={"create-submit"}>Выбрать секцию</button>
        <OptionString text={"Ширина секции"} value={"100"} maxLenght={3} property={"%"} />
        <OptionString text={"Высота секции"} value={"25"} maxLenght={3} property={"%"} />
        <OptionString text={"Количество подсекций"} value={"1"} maxLenght={3} property={""} />
      </div>
    )
  }
}