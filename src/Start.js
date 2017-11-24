import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom'

class Start extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1 >Welcome to Individual Job Match</h1>
                </header>
                <Link to="/quiz/1" />
            </div>
        );
    }
}

export default Start;
