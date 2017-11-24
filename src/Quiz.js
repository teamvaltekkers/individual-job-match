import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom'

import TechnicalQuiz from './TechnicalQuiz';

class Quiz extends Component {
    constructor(props) {
        super(props);

        console.dir(props.match.params.questionIndex);

        this.state = {
            quiz: TechnicalQuiz,
            questionIndex: parseInt(props.match.params.questionIndex, 10)
        };
    }

    render() {
        const index = this.state.questionIndex;
        const nextIndex = index + 1;
        const question = this.state.quiz[index];

        const answers = question.answers.map(answer => {
            return (
                <div className="multiple-choice form-group" key={answer.index}>
                    <input id={answer.index} type="radio" name="radio-group" value={answer.index} />
                    <label htmlFor={answer.index}>{answer.index} - {answer.answer}</label>
                </div>
            );
        });

        const nextButton =
            <div className="clearfix">
                <Link to={`/quiz/${nextIndex}`} className="button">
                    Next
                </Link>
            </div>;

        const finishButton =
            <div className="clearfix">
                <Link to="/summary">
                    Finish
                </Link>
            </div>;

        const isLastQuestion = nextIndex === this.state.quiz.length;

        const button = isLastQuestion ?
            finishButton :
            nextButton;

        return (
            <div>
                <h1 className="heading-large">
                    {question.question}
                </h1>
                <form>
                    {answers}
                    {button}
                    <br />
                    {finishButton}
                </form>
            </div>
        );
    }
}

export default Quiz;