import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom'

class Start extends Component {
    render() {
        return (
            <div>
                <h1 className="heading-large">Welcome to Individual Talent Match</h1>
                <p className="lead">The Individual Talent Match is a measure used by employers to show how much of a logic thinker you are. Your results will show whether you have a technical brain and recruiters looking for technical roles will be matched to you.</p>
                <p>The Talent Match is multiple choice.</p>
                <p>Click the start button to begin.</p>

                <Link to="/quiz/0" className="button button-start">
                    Start
                </Link>
            </div>
        );
    }
}

export default Start;
