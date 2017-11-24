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

    nextQuestion = () => {
        this.setState((prevState, props) => {
            return {
                questionIndex: prevState.questionIndex + 1
            }
        });
    }

    completeQuiz = () => {
        this.setState((prevState, props) => {
            return {
                questionIndex: prevState.questionIndex + 1
            }
        });
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
                <button onClick={this.nextQuestion}>Next</button>
            </div>
        );
    }
}

export default Quiz;