/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, RefObject } from 'react';
import Validator from './Validator';
import { Errors } from './FormInterfaces';

import '../../styles/Form.css';

export interface TextAreaProps {
  className: string;
  label: string;
  name: string;
  update: boolean;
  errorSetter: (htmlElement: keyof Errors, newError: string[]) => void;
  errors?: Errors;
  minLength: number;
  maxLength: number;
  rows: number;
  cols: number;
  required: boolean;
}

interface TextAreaState {}

class TextArea extends Component<TextAreaProps, TextAreaState> {
  private areaRef: RefObject<HTMLTextAreaElement>;

  private validator: Validator;

  constructor(props: TextAreaProps) {
    super(props);
    this.areaRef = React.createRef<HTMLTextAreaElement>();
    this.validator = new Validator();
  }

  componentDidUpdate(prevProps: TextAreaProps) {
    const { update, name } = this.props;
    if (prevProps.update !== update) {
      const value: string | undefined = this.areaRef.current?.value;
      const { errorSetter, minLength, maxLength, required } = this.props;
      const errors: string[] = this.validator.textArea(value, minLength, maxLength, required);
      errorSetter(name as keyof Errors, errors);
    }
  }

  render() {
    const { className, label, name, errors, maxLength, minLength, rows, cols, required } =
      this.props;
    const textAreaErrors = errors && errors[name as keyof Errors];
    return (
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <textarea
          className={`text-area ${textAreaErrors?.length && 'field-error'}`}
          ref={this.areaRef}
          name={name}
          maxLength={maxLength}
          minLength={minLength}
          rows={rows}
          cols={cols}
          required={required}
        />
        <br />
        {errors && textAreaErrors && (
          <ul className="error-list">
            {textAreaErrors?.map((el, idx) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={idx} className="error-text text-area">
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

export default TextArea;
