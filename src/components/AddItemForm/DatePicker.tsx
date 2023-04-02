/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import { Component, ReactNode } from 'react';

export interface DatePickerProps {
  className: string;
  text: string;
  name: string;
  // validation: (n: number) => void;
  error?: string;
  children: ReactNode;
}

interface DatePickerState {}

class DatePicker extends Component<DatePickerProps, DatePickerState> {
  // constructor(props: DatePickerProps) {
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
        {error && <span className="error-datepicker datepicker-field">{error}</span>}
      </div>
    );
  }
}

export default DatePicker;
