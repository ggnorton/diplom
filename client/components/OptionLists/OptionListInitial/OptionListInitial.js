import React, {Component} from 'react';
import '../optionList.css';
import OptionButton from "../../OptionButton/OptionButton";

export default class OptionListInitial extends Component{
  render (){
    return (
      <div className="option-list">
        <OptionButton text={"Добавить секцию"}/>
        <OptionButton text={"Изменить секцию"}/>
        <OptionButton text={"Удалить секцию"}/>
        <OptionButton text={"Выйти"}/>
      </div>
    )
  }
}