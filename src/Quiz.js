import React, { Component } from 'react';
import TechnicalQuiz from './TechnicalQuiz';

class Quiz extends Component {
    constructor() {
        super();

        this.state = {
            quiz: TechnicalQuiz,
            questionIndex: 0
        };
    }

    render() {
        const index = this.state.questionIndex;
        const question = this.state.quiz[index];
        const answers = question.answers.map(answer => {
            return (
                <div key={answer.index}>
                    {answer.index} - {answer.answer}
                </div>
            );
        });

        return (
            <div>
                <div>
                    {question.question}
                </div>
                <div>
                    {answers}
                </div>
            </div>
        );
    }
}

export default Quiz;