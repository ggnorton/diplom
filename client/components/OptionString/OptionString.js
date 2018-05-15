import React, {Component} from 'react';
import './optionString.css';

export default class OptionString extends Component{
  
  constructor(props) {
    super(props);
  }
  
  render (){
    return (
      <div className="option_string">
        <span className="option_string__text">{this.props.text+":"}</span><br/>
        <input className="option_string__field" value={this.props.value} maxLength={this.props.maxLength}/>
        <span>{this.props.property}</span>
      </div>
    )
  }
}