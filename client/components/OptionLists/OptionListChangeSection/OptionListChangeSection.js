import React, {Component} from 'react';
import '../optionList.css';
import OptionString from "../../OptionString/OptionString";
import OptionButton from "../../OptionButton/OptionButton.js";
import {Link} from 'react-router-dom'
import ChangePickSection from "./ChangePickSection/ChangePickSection";
import {deleteSection} from '../../actions/actions.js'
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

  initSectionInfo() {
    if (this.state.selectedSection) {
      return (
        <div>
          <OptionString text={"Ширина секции"} value={this.state.selectedSection.width} maxLenght={3} property={"%"} />
          <OptionString text={"Высота секции"} value={this.state.selectedSection.height} maxLenght={3} property={"%"} />
         <OptionButton text={"изменить секцию"}/>
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

const mapStateToProps = state => ({
  sections: state
})

const mapDispatchToProps = dispatch => ({
  deleteSection: sectionId => dispatch(deleteSection(sectionId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionListChangeSection)