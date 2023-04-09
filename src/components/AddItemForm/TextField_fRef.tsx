/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, ForwardedRef, Ref } from 'react';

/* <TextField
  className="text-field"
  label="Title"
  name="title"
  forwardedRef={this.textInputRef}
  // validation={this.validateTitle}
  error="some error"
  maxLength={50}
  minLength={2}
/> */

export interface TextFieldProps {
  className: string;
  label: string;
  name: string;
  // forwardedRef: ForwardedRef<HTMLInputElement>;
  forwardedRef: Ref<HTMLInputElement>;
  // validation: (n: number) => void;
  error?: string;
  maxLength?: number;
  minLength?: number;
}

interface TextFieldState {}

class TextField extends Component<TextFieldProps, TextFieldState> {
  // constructor(props: TextFieldProps) {
  //   super(props);
  //   // this.inputRef = React.createRef<HTMLInputElement>();
  //   // this.props.validation(this.inputRef.current?.value);
  // }

  render() {
    const { className, label, name, forwardedRef, error, maxLength, minLength } = this.props;
    console.log('ref', forwardedRef);
    return (
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          name={name}
          ref={forwardedRef}
          maxLength={maxLength}
          minLength={minLength}
          required
        />
        {error && <span className="error-text text-field">{error}</span>}
      </div>
    );
  }
}

// export default TextField;
export default React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props: TextFieldProps, ref: Ref<HTMLInputElement>) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextField {...props} forwardedRef={ref} />
  )
);
