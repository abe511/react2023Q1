/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import { Component, ReactNode } from 'react';

export interface OptionsProps {
  className: string;
  text: string;
  name: string;
  // validation: (n: number) => void;
  error?: string;
  children: ReactNode;
}

interface OptionsState {}

class Options extends Component<OptionsProps, OptionsState> {
  // constructor(props: OptionsProps) {
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
        {error && <span className="error error-options options-field">{error}</span>}
      </div>
    );
  }
}

export default Options;
