/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, RefObject } from 'react';
import Validator from './Validator';
import { Errors } from './FormInterfaces';

import '../../styles/Form.css';

export interface TextFieldProps {
  className: string;
  label: string;
  name: string;
  update: boolean;
  errorSetter: (htmlElement: keyof Errors, newError: string[]) => void;
  errors?: Errors;
  minLength: number;
  maxLength: number;
  required: boolean;
}

interface TextFieldState {}

class TextField extends Component<TextFieldProps, TextFieldState> {
  private inputRef: RefObject<HTMLInputElement>;

  private validator: Validator;

  constructor(props: TextFieldProps) {
    super(props);
    this.inputRef = React.createRef<HTMLInputElement>();
    this.validator = new Validator();
  }

  componentDidUpdate(prevProps: TextFieldProps) {
    const { update, name } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    // console.log('update', prevProps.update, this.props.update);
    if (prevProps.update !== update) {
      const value: string | undefined = this.inputRef.current?.value;
      const { errorSetter, minLength, maxLength, required } = this.props;
      const errors: string[] = this.validator.textField(value, minLength, maxLength, required);
      errorSetter(name as keyof Errors, errors);
    }
  }

  render() {
    const { className, label, name, errors, maxLength, minLength, required } = this.props;
    const textFieldErrors = errors && errors[name as keyof Errors];
    return (
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <input
          className={`text-field ${textFieldErrors?.length && 'field-error'}`}
          type="text"
          ref={this.inputRef}
          name={name}
          maxLength={maxLength}
          minLength={minLength}
          required={required}
        />
        <br />
        {errors && textFieldErrors && (
          <ul className="error-list">
            {textFieldErrors?.map((el, idx) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={idx} className="error-text text-field">
                  {el}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default TextField;
