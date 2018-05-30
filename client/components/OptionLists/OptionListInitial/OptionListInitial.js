import React, {Component} from 'react';
import '../optionList.css';
import OptionButton from "../../OptionButton/OptionButton";
import {Link} from 'react-router-dom'

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
        <Link to="/addSection"><OptionButton text={"Добавить секцию"}/></Link>
        <Link to="/changeSection"><OptionButton text={"Изменить секцию"}/></Link>
        <Link to="/deleteSection"><OptionButton text={"Удалить секцию"}/></Link>
        <OptionButton text={"Выйти"}/>
      </div>
    )
  }
}