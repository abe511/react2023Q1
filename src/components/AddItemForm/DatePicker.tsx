/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, RefObject } from 'react';
import Validator from './Validator';
import { Errors } from './FormInterfaces';

import '../../styles/Form.css';

export interface DatePickerProps {
  className: string;
  label: string;
  name: string;
  update: boolean;
  errorSetter: (htmlElement: keyof Errors, newError: string[]) => void;
  errors?: Errors;
  min: Date;
  required: boolean;
}

interface DatePickerState {}

class DatePicker extends Component<DatePickerProps, DatePickerState> {
  private dateRef: RefObject<HTMLInputElement>;

  private validator: Validator;

  constructor(props: DatePickerProps) {
    super(props);
    this.dateRef = React.createRef<HTMLInputElement>();
    this.validator = new Validator();
  }

  componentDidUpdate(prevProps: DatePickerProps) {
    const { update, name } = this.props;
    if (prevProps.update !== update) {
      const selectedDate: number | typeof NaN | undefined = this.dateRef.current?.valueAsNumber;
      const { errorSetter, min, required } = this.props;
      const errors: string[] = this.validator.datePicker(selectedDate, min, required);
      errorSetter(name as keyof Errors, errors);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  dateToString() {
    const { min } = this.props;
    const year = min.getFullYear();
    const month = (min.getMonth() + 1).toString().padStart(2, '0');
    const day = min.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  render() {
    const { className, label, name, errors, required } = this.props;
    const datePickerErrors = errors && errors[name as keyof Errors];
    return (
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <input
          className={`datepicker-field ${datePickerErrors?.length && 'field-error'}`}
          type="date"
          ref={this.dateRef}
          name={name}
          min={this.dateToString()}
          required={required}
        />
        <br />
        {errors && datePickerErrors && (
          <ul className="error-list">
            {datePickerErrors?.map((el, idx) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={idx} className="error-text datepicker-field">
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

export default DatePicker;
