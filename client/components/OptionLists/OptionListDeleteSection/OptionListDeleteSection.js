import React, {Component} from 'react';
import '../optionList.css';
import OptionString from "../../OptionString/OptionString";
import OptionButton from "../../OptionButton/OptionButton";
import {Link} from 'react-router-dom'
import {deleteSection} from '../../actions/actions.js'
import { connect } from 'react-redux'

class OptionListDeleteSection extends Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedSectionId: this.props.sections[0] && this.props.sections[0].sectionId
    }
  }

  onDeleteSection(e) {
    this.props.deleteSection(this.state.selectedSectionId)
  }

  onChangeValue(e) {
    this.setState({selectedSectionId: e.target.value})
  }

  render (){
    return (
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
        <button onClick={this.onDeleteSection.bind(this)} className={"create-submit"}>Удалить секцию</button>
        <Link to='' className={"option-button_back"}><OptionButton text={"Назад"}/></Link>
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
)(OptionListDeleteSection)