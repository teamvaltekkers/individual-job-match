import React, { Component } from 'react';
import TechnicalQuiz from './TechnicalQuiz';

class Quiz extends Component {
    componentWillMount() {
        this.state = TechnicalQuiz;
    }

    render() {
        return (
            <div>
                Quiz
            </div>
        );
    }
}

export default Quiz;