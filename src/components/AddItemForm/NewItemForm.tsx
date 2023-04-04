/* eslint-disable react/state-in-constructor */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, RefObject } from 'react';
import Field from './Field';
import DatePicker from './DatePicker';
import Options from './Options_fRef';
import Quiz from './Quiz';
import FileUpload from './FileUpload';

import Dropdown from './Dropdown';
import TextArea from './TextArea';
import TextField from './TextField';

import { Errors, Option } from './FormInterfaces';

// placeholder values. to be replaced with a get request to an api
const types: Option[] = [
  {
    id: '1',
    value: 'type1',
    text: 'Type 1',
  },
  {
    id: '2',
    value: 'type2',
    text: 'Type 2',
  },
  {
    id: '3',
    value: 'type3',
    text: 'Type 3',
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NewItemProps {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NewItemState {
  update: boolean;
  errors: Errors;
  title: string | undefined;
  description: string | undefined;
  type: string | undefined;
}

class NewItemForm extends Component<NewItemProps, NewItemState> {
  private textInputRef: RefObject<HTMLInputElement>;

  private textAreaRef: RefObject<HTMLTextAreaElement>;

  private selectedOptionRef: RefObject<HTMLSelectElement>;

  constructor(props: NewItemProps) {
    super(props);

    this.textInputRef = React.createRef<HTMLInputElement>();

    this.textAreaRef = React.createRef<HTMLTextAreaElement>();

    this.selectedOptionRef = React.createRef<HTMLSelectElement>();

    this.state = {
      update: false,
      errors: {
        title: [],
        second: [],
        textArea: [],
      },
      title: '',
      description: '',
      type: '',
    };
  }

  setErrorState = (htmlElement: keyof Errors, newErrors: string[]) => {
    // console.log('new err:', newErrors, htmlElement);
    this.setState(
      (state) => {
        const { errors } = state;
        return {
          errors: {
            ...errors,
            [htmlElement]: [...newErrors],
          },
        };
      },
      // callback
      () => {
        // eslint-disable-next-line react/destructuring-assignment
        console.log('elem', htmlElement, 'errors:', this.state.errors);
      }
    );
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // toggle form validation
    this.setState((prevState) => ({
      update: !prevState.update,
    }));
    this.setState({
      title: this.textInputRef.current?.value,
      description: this.textAreaRef.current?.value,
      type: this.selectedOptionRef.current?.value,
    });
  };

  render() {
    const { title, description, type, update, errors } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    console.log('after', this.state.errors);

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <TextField
            className="title"
            label="Title"
            name="title"
            update={update}
            errorSetter={this.setErrorState}
            errors={errors}
            minLength={2}
            maxLength={50}
            required
          />
          <TextField
            className="author"
            label="Author"
            name="author"
            update={update}
            errorSetter={this.setErrorState}
            errors={errors}
            minLength={2}
            maxLength={5}
            required
          />
          <TextArea
            className="description"
            label="Description"
            name="description"
            update={update}
            errorSetter={this.setErrorState}
            errors={errors}
            minLength={16}
            maxLength={512}
            rows={5}
            cols={30}
            required
          />
          <br />
          <Dropdown
            className="type"
            label="Type"
            name="type"
            update={update}
            errorSetter={this.setErrorState}
            errors={errors}
            types={types}
            required
          />
          <br />
          <DatePicker
            className="date-picker"
            label="Select date"
            name="datepicker"
            update={update}
            errorSetter={this.setErrorState}
            errors={errors}
            min={new Date()}
            required
          />
          {/*
          <Options className="options" text="Options" name="options" error="options error">
            <label htmlFor="option1">
              <input type="checkbox" name="option1" />
              Option 1
            </label>
            <br />
            <label htmlFor="option1">
              <input type="checkbox" name="option2" />
              Option 2
            </label>
            <br />
            <label htmlFor="option1">
              <input type="checkbox" name="option3" />
              Option 3
            </label>
          </Options>
          <Quiz className="choice" text="Choose one" name="choice" error="choice error">
            <label htmlFor="option1">
              <input type="radio" name="choice" />
              Yes
            </label>
            <label htmlFor="option2">
              <input type="radio" name="choice" />
              No
            </label>
            <label htmlFor="option3">
              <input type="radio" name="choice" />
              Somewhat
            </label>
          </Quiz>
          <FileUpload className="upload" text="Upload image" name="upload" error="upload error">
            <input type="file" name="image" accept="image/jpeg, image/png, image/gif" />
          </FileUpload> */}

          <button type="submit">Submit</button>
        </form>
        <p>{title}</p>
        <p>{description}</p>
        <p>{type}</p>
      </>
    );
  }
}

export default NewItemForm;
