import React, {Component} from 'react';
import {changeSubSection} from '../../../actions/actions.js'
import { connect } from 'react-redux'
import OptionString from "../../../OptionString/OptionString";

import OptionButton from "../../../OptionButton/OptionButton";

class ChangePickSection extends Component{
  constructor(props) {
      super(props)
      this.state = {
          section: props.section,
          selectedSubSectionId: 0,
          selectedSubSection: undefined
      }
  }

  selectSubSection(e) {
    this.setState({selectedSubSectionId: e.target.value})
    let subSectionIndex = null;
    this.state.section.subSections.forEach((item, index) => {
      if (item.subSectionId == e.target.value) {
        subSectionIndex = index;
      }
    })
    this.setState({selectedSubSection: this.state.section.subSections[subSectionIndex]})
    console.log(this.state.section.subSections[subSectionIndex])
  }

  onChangeSubSection(e) {
    let data = {
      sectionId: this.state.section.sectionId,
      subSectionId: this.state.selectedSubSectionId,
      'background-color': this.state.selectedSubSection['background-color']
    }
    this.props.changeSubSection(data)
  }

  onChangeColor(e) {
    let selSubSec = this.state.selectedSubSection
    selSubSec['background-color'] = e.target.value
    this.setState({
      selectedSubSection: selSubSec
    })
  }

  onChangeText(e) {
    let selSubSec = this.state.selectedSubSection
    selSubSec['text'] = e.target.value
    this.setState({
      selectedSubSection: selSubSec
    })
  }

  onChangeTextColor(e) {
    let selSubSec = this.state.selectedSubSection
    selSubSec['color'] = e.target.value
    this.setState({
      selectedSubSection: selSubSec
    })
  }

  onChangePadding(e) {
    let selSubSec = this.state.selectedSubSection
    selSubSec['padding'] = e.target.value
    this.setState({
      selectedSubSection: selSubSec
    })
  }

  onChangeBorder(e) {
    let selSubSec = this.state.selectedSubSection
    selSubSec['border'] = e.target.value
    this.setState({
      selectedSubSection: selSubSec
    })
  }

  onChangeBorderR(e) {
    let selSubSec = this.state.selectedSubSection
    selSubSec['color'] = e.target.value
    this.setState({
      selectedSubSection: selSubSec
    })
  }

  initSubSectionInfo() {
    if (this.state.selectedSubSection) {
      return (
        <div>          
          <OptionString text={"Цвет фона"} 
                        value={this.state.selectedSubSection['background-color']} 
                        maxLenght={3} 
                        onChangeValue={this.onChangeColor.bind(this)}/>
          <OptionString text={"Текст"} 
                        value={this.state.selectedSubSection.text} 
                        maxLenght={3} 
                        onChangeValue={this.onChangeText.bind(this)}/>
          <OptionString text={"Цвет текста"} 
                        value={this.state.selectedSubSection.color} 
                        maxLenght={3} 
                        onChangeValue={this.onChangeTextColor.bind(this)}/>
          <OptionString text={"Отступы"} 
                        value={this.state.selectedSubSection.padding} 
                        maxLenght={3} 
                        onChangeValue={this.onChangePadding.bind(this)}/>
          <OptionString text={"Рамка"} 
                        value={this.state.selectedSubSection.border} 
                        maxLenght={3} 
                        onChangeValue={this.onChangeBorder.bind(this)}/>
          <OptionString text={"Скругления рамки"} 
                        value={this.state.selectedSubSection['border-radius']} 
                        maxLenght={3} 
                        onChangeValue={this.onChangeBorderR.bind(this)}/>
          <OptionButton text={"изменить подсекцию"} onClick={this.onChangeSubSection.bind(this)}/>
        </div>
      )
    } else {
      return ""
    }
  }

  render()  {
    return(
      <div className="change-subsections">
        <select value={this.state.selectedSubSectionId} onChange={this.selectSubSection.bind(this)}>
          {this.props.section.subSections.map(section => {
            return (
                  <option value={section.subSectionId} key={section.subSectionId}>
                      {section.subSectionId}
                  </option>
            )
          })}
        </select>
        {this.initSubSectionInfo.call(this)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sections: state
})

const mapDispatchToProps = dispatch => ({
  changeSubSection: (params) => dispatch(changeSubSection(params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePickSection)