import React, { Component } from 'react';
import AllProjects from "./helpers/AllProjectsHelper"
import SmallProject from "./SmallProject"
import "./AllProjectsPage.css"

class AllProjectsPage extends Component {
    render() {
        return (
            <div className="AllProjectsPage">
                <div className="AllProjectsPage-content">
                    <h1 className="AllProjects__title">All Projects</h1>
                    <div className="AllProjectsPage-wrapper">

                        {AllProjects().map(proj => (
                            <SmallProject title={proj.name} img={proj.img} description={""} link={proj.projUrl} ghLink={proj.codeUrl} />
                        ))}
                    </div>
                </div>


            </div>
        );
    }
}

export default AllProjectsPage;