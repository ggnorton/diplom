import React, {Component} from 'react';
import './optionButton.css';

export default class OptionButton extends Component {
    render () {
        return (
            <span className="option-button" onClick={this.props.onChangeContent}>{this.props.text}</span>
        )
    }
}

/*OptionButton.PropTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}*/