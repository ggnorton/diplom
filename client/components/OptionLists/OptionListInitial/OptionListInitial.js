import React, {Component} from 'react';
import '../optionList.css';
import OptionButton from "../../OptionButton/OptionButton";

export default class OptionListInitial extends Component{
  
  optionClick(){
  
  }
  
  setContentAddSection() {
    this.props.onChangeContent('add section')
  }
  setContentChangeSection(){
    this.props.onChangeContent('change section')
  }
  
  render (){
    return (
      <div className="option-list">
        <OptionButton text={"Добавить секцию"} onChangeContent={this.setContentAddSection.bind(this)}/>
        <OptionButton text={"Изменить секцию"} onChangeContent={this.setContentChangeSection(this)}/>
        <OptionButton text={"Удалить секцию"}/>
        <OptionButton text={"Выйти"}/>
      </div>
    )
  }
}