import React, {Component} from 'react';
import {deleteSection} from '../../../actions/actions.js'
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

  initSubSectionInfo() {
    debugger
    if (this.state.selectedSubSection) {
      return (
        <div>          
          <OptionString text={"Цвет фона"} value={this.state.selectedSubSection['background-color']} maxLenght={3} />
          <OptionString text={"Текст"} value={this.state.selectedSubSection.text} maxLenght={3} />
          <OptionButton text={"изменить подсекцию"}/>
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
  deleteSection: sectionId => dispatch(deleteSection(sectionId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePickSection)