import React, {Component} from 'react';
import '../optionList.css';
import OptionButton from "../../OptionButton/OptionButton";

export default class OptionListInitial extends Component{
  
  // optionClick(){
  //
  // }
  //
  // setContentAddSection() {
  //   this.props.onChangeContent('add section')
  // }
  // setContentChangeSection(){
  //   this.props.onChangeContent('change section')
  // }
  
  
  // onChangeContent={this.setContentAddSection.bind(this)}
  // onChangeContent={this.setContentChangeSection(this)}
  
  
  render (){
    return (
      <div className="option-list">
        <OptionButton text={"Добавить секцию"} />
        <OptionButton text={"Изменить секцию"} />
        <OptionButton text={"Удалить секцию"}/>
        <OptionButton text={"Выйти"}/>
      </div>
    )
  }
}