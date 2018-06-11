import React from 'react';
import './subsection.css';

class Subsection extends React.Component{
  render(){
  	debugger
    return(
      <div className="subsection">
      	{this.props.id} <br />
      	{this.props.sectionId}
      </div>
    );
  }
}

export default Subsection;