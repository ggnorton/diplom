import React, {Component} from 'react';
import './optionButton.css';

export default class OptionButton extends Component {
    render () {
        return (
            <div className="option-button">
                <button className="option-button__text" onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        )
    }
}

/*OptionButton.PropTypes = {
    onClick: PtopTypes.func.isRequired,
    text: PropTypes.string.isRequired
}*/