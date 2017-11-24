import React, { Component } from 'react';
import './card.css';

class JobSwipe extends Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return (
            <div className="card">
                <div className="card__header">
                    <h3 className="job-title">Technical Engineer</h3>
                    <span className="job-location">Aldershot, Hampshire</span>
                    <span className="job-salary">Up to £40,000 (Dependent on Experience) + Extensive Benefits Package </span>
                </div>
                <div className="card__body">
                    <p>Our client is a global provider of technology systems and solutions across the entire insurance industry. They provide core technology solutions, distribution and trading capability, advanced analytics and solution delivery.</p>
                    <p>Their team is growing, so our client is on the lookout for a talented Technical Engineer to join their Operations Team, based at their Aldershot office.</p>
                </div>
            </div>
        );
    }
}

export default JobSwipe;