import React, {Component} from 'react';
import '../optionList.css';
import OptionString from "../../OptionString/OptionString";
import OptionButton from "../../OptionButton/OptionButton";
import {Link} from 'react-router-dom'
import { createSection } from '../../actions/actions.js'
import { connect } from 'react-redux'

class OptionListCreateSection extends Component{
  constructor(props) {
    super(props)
    this.state = {
      width: 100,
      height: 25,
      subSectionsCount: 1
    }
  }

  onChangeWidth(e) {
    this.setState({width: e.target.value})
  }

  onChangeHeight(e) {
    this.setState({height: e.target.value})
  }

  onChangeCount(e) {
    this.setState({subSectionsCount: e.target.value})
  }

  onCreateSection(e) {
    this.props.createSection({
      width: this.state.width,
      height: this.state.height,
      subSectionsCount: this.state.subSectionsCount
    })
  }

  render (){
    return (
      <div className="option-list">
        <OptionString onChangeValue={this.onChangeWidth.bind(this)} 
                      text={"Ширина секции"} 
                      value={this.state.width} 
                      maxLenght={3} property={"%"} />
        <OptionString onChangeValue={this.onChangeHeight.bind(this)} 
                      text={"Высота секции"} 
                      value={this.state.height} 
                      maxLenght={3} 
                      property={"%"} />
        <OptionString onChangeValue={this.onChangeCount.bind(this)} 
                      text={"Количество подсекций"} 
                      value={this.state.subSectionsCount} 
                      maxLenght={3} 
                      property={""} />
        <button onClick={this.onCreateSection.bind(this)} className={"create-submit"}>Создать секцию</button>
        <Link to='' className={"option-button_back"}><OptionButton text={"Назад"}/></Link>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  createSection: params => dispatch(createSection(params))
})

export default connect(
  null,
  mapDispatchToProps
)(OptionListCreateSection)