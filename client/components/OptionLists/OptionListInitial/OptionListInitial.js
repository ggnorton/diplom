import React, {Component} from 'react';
import '../optionList.css';
import OptionButton from "../../OptionButton/OptionButton";

export default class OptionListInitial extends Component{
  
  optionClick(){
  
  }
  
  setContentAddSection() {
    window.cmsStore.onChangeState('addSection')
  }
  setContentChangeSection(){
    window.cmsStore.onChangeState('changeSection')
  }
  
  render (){
    return (
      <div className="option-list">
        <OptionButton text={"Добавить секцию"} onClick={this.setContentAddSection.bind('this')}/>
        <OptionButton text={"Изменить секцию"} onClick={this.setContentChangeSection.bind('this')}/>
        <OptionButton text={"Удалить секцию"}/>
        <OptionButton text={"Выйти"}/>
      </div>
    )
  }
}