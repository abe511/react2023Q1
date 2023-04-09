/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import { Component, ReactNode } from 'react';

export interface FileUploadProps {
  className: string;
  text: string;
  name: string;
  // validation: (n: number) => void;
  error?: string;
  children: ReactNode;
}

interface FileUploadState {}

class FileUpload extends Component<FileUploadProps, FileUploadState> {
  // constructor(props: FileUploadProps) {
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
        {error && <span className="error error-file file-field">{error}</span>}
      </div>
    );
  }
}

export default FileUpload;
