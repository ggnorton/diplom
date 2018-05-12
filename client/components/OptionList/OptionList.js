import React from 'react';
import './optionList.css';
import OptionButton from "../OptionButton/OptionButton";

export default class OptionList extends React.Component {
    render () {
        return (
            <div className="option-list">
                <OptionButton/>
                <OptionButton/>
            </div>
        )
    }
}