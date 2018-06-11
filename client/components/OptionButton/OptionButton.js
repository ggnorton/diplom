import React, {Component} from 'react';
import './optionButton.css';

class OptionButton extends Component {
    render () {
        return (
            <button onClick={this.props.onClick} className="option-button">{this.props.text}</button>
        )
    }
}

export default OptionButton