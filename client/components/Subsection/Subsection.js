import React from 'react';
import './subsection.css';

class Subsection extends React.Component{
  render(){
  	debugger
  	let style = {
  		backgroundColor: this.props.params['background-color'],
      color: this.props.params['color'],
      padding: this.props.params['padding'],
      border: this.props.params['border'],
      borderRadius: this.props.params['border-radius']
  	}
    return(
      <div className="subsection" style={style}>
      	{this.props.params.text}
      </div>
    );
  }
}

export default Subsection;