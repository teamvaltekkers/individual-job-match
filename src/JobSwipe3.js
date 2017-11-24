import React, { Component } from 'react';
import './card.css';

import {
    Link
} from 'react-router-dom'

class JobSwipe3 extends Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return (
            <div className="swipe-control">
                <div className="card">
                    <div className="card__header">
                        <h3 className="job-title">Senior SharePoint Consultant</h3>
                        <span className="job-location">Aldershot, Hampshire</span>
                        <span className="job-salary">Up to £40,000 (Dependent on Experience) + Extensive Benefits Package </span>
                    </div>
                    <div className="card__body">
                        <p>The Senior SharePoint Consultant applies current graphics design and .NET technologies to develop, 
                            modify, maintain SharePoint server portals and Office 365 (O365) tenants. Design, develop, and 
                            manage site content and capabilities and provide daily onsite maintenance of the existing 
                            SharePoint/O365 portals. Participates in the testing process through test review and analysis, 
                            test witnessing and certification of software. Familiar with Global Pharmaceutical standard 
                            concepts, practices, and procedures will be desired. Relies on experience and judgment to plan 
                            and accomplish goals. Work with project stakeholders on a daily basis. A certain degree of 
                            creativity and latitude is required.</p>
                    </div>
                </div>

                <Link to="/profile" className="swipe-control__left">
                    Like
                    </Link>
                <Link to="/profile" className="swipe-control__right">
                    Dislike
                    </Link>
            </div>
        );
    }
}

export default JobSwipe3;
