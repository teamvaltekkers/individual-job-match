import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom'

class Summary extends Component {
    render() {
        return (
            <div>
                <h1 class="heading-large">Talent Match Completed</h1>

                <p>We now need to help you find your perfect match. Can you give us a few more details around your ideal job?</p>

                <Link to="/profile" className="button">
                    Continue with your profile
                </Link>
            </div>
        );
    }
}

export default Summary;
