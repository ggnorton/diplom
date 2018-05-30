import React, {Component} from 'react';
import './optionButton.css';

class OptionButton extends Component {
    render () {
        return (
            <span className="option-button">{this.props.text}</span>
        )
    }
}

export default OptionButton