/* eslint-disable react/state-in-constructor */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, RefObject } from 'react';

import TextField from './TextField';
import TextArea from './TextArea';
import Dropdown from './Dropdown';
import DatePicker from './DatePicker';
import Options from './Options';
import RadioGroup from './RadioGroup';
import ImageUpload from './ImageUpload';

import FormCardList from './FormCardList';

import { Errors, Option, FormCardData } from './FormInterfaces';

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

// interface FormCardData {
//   title: string;
//   author: string;
//   description: string;
//   type: string;
//   date: string;
//   option: string;
//   radio: string;
//   image: string;
// }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NewItemProps {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NewItemState {
  update: boolean;
  errors: Errors;
  imageURL: string;
  cards: FormCardData[];
}

class NewItemForm extends Component<NewItemProps, NewItemState> {
  constructor(props: NewItemProps) {
    super(props);

    this.setImageURL = this.setImageURL.bind(this);

    this.state = {
      update: false,
      errors: {
        title: [],
        second: [],
        textarea: [],
        dropdown: [],
        datepicker: [],
        options: [],
        radio: [],
        image: [],
      },
      title: '',
      author: '',
      description: '',
      type: '',
      date: '',
      option: '',
      radio: '',
      image: '',
      // imageURL: '',
      cards: [],
    };
  }

  setErrorState = (htmlElement: keyof Errors, newErrors: string[]) => {
    this.setState((state) => {
      const { errors } = state;
      return {
        errors: {
          ...errors,
          [htmlElement]: [...newErrors],
        },
      };
    });
  };

  setImageURL(url: string) {
    this.setState({ imageURL: url });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // toggles form validation
    this.setState((prevState) => ({
      update: !prevState.update,
    }));
    
  };

  render() {
    const { update, errors, imageURL, cards } = this.state;
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
          <Options
            className="options"
            legend="Options"
            name="option"
            update={update}
            errorSetter={this.setErrorState}
            errors={errors}
            required={1}
          />
          <br />
          <RadioGroup
            className="radio-group"
            legend="Choose one"
            name="radio"
            update={update}
            errorSetter={this.setErrorState}
            errors={errors}
            required
          />
          <ImageUpload
            className="upload image"
            label="Upload image"
            name="image"
            update={update}
            errorSetter={this.setErrorState}
            errors={errors}
            format="image/jpeg, image/png, image/gif"
            required
            setImageURL={this.setImageURL}
            // imageURL={imageURL}
          />
          <FormCardList cards={cards} />

          <button type="submit">Submit</button>
        </form>
        <p>{imageURL}</p>
        {/* <p>{description}</p>
        <p>{type}</p> */}
      </>
    );
  }
}

export default NewItemForm;
