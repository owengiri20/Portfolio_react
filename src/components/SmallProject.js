import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SmallProject extends Component {
    render() {
        const { title, img, id } = this.props;
        return (
            <div className="SmallProject">
                <h1 className="proj__title--sm">{title}</h1>
                <img src={img} alt="" className="proj__img--sm" />
                <Link to={`/viewProject/${id}`} className="btn">View</Link>
            </div>
        );
    }
}

export default SmallProject;