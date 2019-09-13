import React, { Component } from 'react';

class SmallProject extends Component {
    render() {
        return (
            <div className="SmallProject">
                <h1 className="proj__title--sm">MoodForFood</h1>
                <img src={this.props.img} alt="" className="proj__img--sm" />
                <button className="btn">View</button>
            </div>
        );
    }
}

export default SmallProject;