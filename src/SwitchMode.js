import React, { Component } from 'react';
import "./SwitchMode.css"

class SwitchMode extends Component {
    render() {
        return (
            <label class="switch" onClick={() => this.props.click()}>
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
        );
    }
}

export default SwitchMode;