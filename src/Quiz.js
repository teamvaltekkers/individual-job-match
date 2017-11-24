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
                <div className="multiple-choice form-group" key={answer.index}>
                    <input id={answer.index} type="radio" name="radio-group" value={answer.index} />
                    <label htmlFor={answer.index}>{answer.index} - {answer.answer}</label>
                </div>
            );
        });

        return (
            <div>
                <h1 className="heading-large">
                    {question.question}
                </h1>
                <form>
                    {answers}
                    <div className="clearfix">
                        <button className="button" onClick={this.nextQuestion}>Next</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Quiz;