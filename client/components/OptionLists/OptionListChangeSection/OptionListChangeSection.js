import React, {Component} from 'react';
import '../optionList.css';
import OptionString from "../../OptionString/OptionString";
import OptionButton from "../../OptionButton/OptionButton.js";
import {Link} from 'react-router-dom'
import ChangePickSection from "./ChangePickSection/ChangePickSection";
import {changeSection} from '../../actions/actions.js'
import { connect } from 'react-redux'

class OptionListChangeSection extends Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedSectionId: this.props.sections[0] && this.props.sections[0].sectionId,
      selectedSection: undefined
    }
  }

  onChangeValue(e) {
    this.setState({selectedSectionId: e.target.value})
    let sectionIndex = null;
    this.props.sections.forEach((item, index) => {
      if (item.sectionId == e.target.value) {
        sectionIndex = index;
      }
    })
    this.setState({selectedSection: this.props.sections[sectionIndex]})
  }

  onChangeWidth(e) {
    let sec = this.state.selectedSection;
    sec.width = e.target.value;
    this.setState({
      selectedSection: sec
    })
  }

  onChangeHeight(e) {
    let sec = this.state.selectedSection;
    sec.height = e.target.value;
    this.setState({
      selectedSection: sec
    })
  }

  onChangeSection(e) {
    this.props.changeSection(this.state.selectedSection)
  }

  initSectionInfo() {
    if (this.state.selectedSection) {
      return (
        <div>
          <OptionString text={"Ширина секции"} 
                        value={this.state.selectedSection.width} 
                        maxLenght={3} 
                        property={"%"} 
                        onChangeValue={this.onChangeWidth.bind(this)}/>
          <OptionString text={"Высота секции"} 
                        value={this.state.selectedSection.height} 
                        maxLenght={3} 
                        property={"%"} 
                        onChangeValue={this.onChangeHeight.bind(this)}/>
         <OptionButton text={"Изменить секцию"} 
                        onClick={this.onChangeSection.bind(this)} />
        </div>        
      )
    } else {
      return ""
    }
  }

  initSubSectionInfo() {
    if (this.state.selectedSection) {
      return (
        <div>
          <ChangePickSection section={this.state.selectedSection}/>
        </div>
      )
    } 
  }

  render (){
    return(
      <div className="option-list">
        <select value={this.state.selectedSectionId} onChange={this.onChangeValue.bind(this)}>
          {this.props.sections.map(section => {
            return (
              <option value={section.sectionId} key={section.sectionId}>
                {section.sectionId}
              </option>
            )
          })}
        </select>

        {this.initSectionInfo.call(this)}
        {this.initSubSectionInfo.call(this)}
        <Link to='/' className={"option-button_back"}><OptionButton text={"Назад"} /></Link>
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
  changeSection: params => dispatch(changeSection(params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionListChangeSection)