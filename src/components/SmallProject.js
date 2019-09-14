import React, { Component } from 'react';
import { Link } from "react-router-dom"

class SmallProject extends Component {
    render() {
        return (
            <div className="SmallProject">
                <h1 className="proj__title--sm">MoodForFood</h1>
                <img src={this.props.img} alt="" className="proj__img--sm" />
                <Link to={`/viewProject/${this.props.id}`} className="btn">View</Link>
            </div>
        );
    }
}

export default SmallProject;