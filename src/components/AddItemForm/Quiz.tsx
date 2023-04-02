/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import { Component, ReactNode } from 'react';

export interface QuizProps {
  className: string;
  text: string;
  name: string;
  // validation: (n: number) => void;
  error?: string;
  children: ReactNode;
}

interface QuizState {}

class Quiz extends Component<QuizProps, QuizState> {
  // constructor(props: QuizProps) {
  //   super(props);
  //   // this.props.validation(this.inputRef.current?.value);
  // }

  render() {
    const { className, text, name, error, children } = this.props;

    return (
      <div className={className}>
        <fieldset className={name}>
          <legend>{text}</legend>
          {children}
        </fieldset>
        {error && <span className="error error-quiz quiz-field">{error}</span>}
      </div>
    );
  }
}

export default Quiz;
