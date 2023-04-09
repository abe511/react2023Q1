/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import { Component, ReactNode } from 'react';

export interface FieldProps {
  className: string;
  text: string;
  name: string;
  // validation: (n: number) => void;
  error?: string;
  children: ReactNode;
}

interface FieldState {}

class Field extends Component<FieldProps, FieldState> {
  // constructor(props: FieldProps) {
  //   super(props);
  //   // this.props.validation(this.inputRef.current?.value);
  // }

  render() {
    const { className, text, name, error, children } = this.props;

    return (
      <div className={className}>
        <label htmlFor={name}>
          {text}
          {children}
        </label>
        {error && <span className="error error-text text-field">{error}</span>}
      </div>
    );
  }
}

export default Field;
