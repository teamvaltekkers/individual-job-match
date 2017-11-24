import React, { Component } from 'react';
import './card.css';

import {
    Link
} from 'react-router-dom'

class JobSwipe extends Component {
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
                        <h3 className="job-title">Infrastructure Architect</h3>
                        <span className="job-location">Middlewich, Cheshire</span>
                        <span className="job-salary">Up to £50,000</span>
                    </div>
                    <div className="card__body">
                        <p>Main Duties &amp; Responsibilities - 
                            Implement and support MS Azure, Disaster Recovery, VMware, Citrix, Exchange 2010, MS SharePoint and V-Cloud /G-Cloud environment.</p>
                    </div>
                </div>

                <Link to="/jobswipe3" className="swipe-control__left">
                    Like
            </Link>
                <Link to="/jobswipe3" className="swipe-control__right">
                    Dislike
            </Link>
            </div>
        );
    }
}

export default JobSwipe;