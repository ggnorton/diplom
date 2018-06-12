import React, {Component} from 'react';
import '../optionList.css';
import OptionButton from "../../OptionButton/OptionButton";
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import {loadStore} from '../../actions/actions.js'

class OptionListInitial extends Component{
  onSave(e) {
    delete localStorage['serverless_crm']
    let storeStr = JSON.stringify(this.props.sections)
    localStorage['serverless_crm'] = storeStr
    alert('модель crm сохранена')
  }
  
  onLoad(e) {
    this.props.loadStore()
    alert('модель crm загружена')
  }
  
  render (){
    return (
      <div className="option-list">
        <Link to="/addSection"><OptionButton text={"Добавить секцию"}/></Link>
        <Link to="/changeSection"><OptionButton text={"Изменить секцию"}/></Link>
        <Link to="/deleteSection"><OptionButton text={"Удалить секцию"}/></Link>
  
        <OptionButton onClick={this.onSave.bind(this)} text={"Сохранить"}/>
        <OptionButton onClick={this.onLoad.bind(this)} text={"Загрузить"}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sections: state
  }
}

const mapDispatchToProps = dispatch => ({
  loadStore: () => dispatch(loadStore())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionListInitial)