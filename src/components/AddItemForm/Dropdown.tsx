/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, RefObject } from 'react';
import Validator from './Validator';
import { Errors, Option } from './FormInterfaces';

import '../../styles/Form.css';

export interface DropdownProps {
  className: string;
  label: string;
  name: string;
  update: boolean;
  errorSetter: (htmlElement: keyof Errors, newError: string[]) => void;
  errors?: Errors;
  types: Option[];
  required: boolean;
}

interface DropdownState {}

class Dropdown extends Component<DropdownProps, DropdownState> {
  private dropdownRef: RefObject<HTMLSelectElement>;

  private validator: Validator;

  constructor(props: DropdownProps) {
    super(props);
    this.dropdownRef = React.createRef<HTMLSelectElement>();
    this.validator = new Validator();
  }

  componentDidUpdate(prevProps: DropdownProps) {
    const { update, name } = this.props;
    if (prevProps.update !== update) {
      const value: string | undefined = this.dropdownRef.current?.value;
      const { errorSetter, required } = this.props;
      const errors: string[] = this.validator.dropdownField(value, required);
      errorSetter(name as keyof Errors, errors);
    }
  }

  render() {
    const { className, label, name, errors, types, required } = this.props;
    const dropdownErrors = errors && errors[name as keyof Errors];
    return (
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <select
          className={`dropdown-field ${dropdownErrors?.length && 'field-error'}`}
          ref={this.dropdownRef}
          name="type"
          defaultValue="none"
          required={required}
        >
          <option value="none" disabled hidden>
            {label}
          </option>
          {types.map((el) => {
            const { id, value, text } = el;
            return (
              <option key={id} value={value}>
                {text}
              </option>
            );
          })}
        </select>
        <br />
        {errors && dropdownErrors && (
          <ul className="error-list">
            {dropdownErrors?.map((el, idx) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={idx} className="error-text dropdown-field">
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

export default Dropdown;
