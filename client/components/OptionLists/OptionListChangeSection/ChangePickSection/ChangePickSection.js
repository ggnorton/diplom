import React, {Component} from 'react';

export default class ChangePickSection extends Component{
  render(){
    return(
      <ul className={"section-list"}>
        <li className={"pick"}>Section 1</li>
        <li className={"pick"}>Section 2</li>
        <li className={"pick"}>Section 3</li>
      </ul>
    )
  }
}