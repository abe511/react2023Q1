// export type InputField = 'title' | 'second' | 'third' | 'textArea';

export interface Errors {
  title: string[];
  second: string[];
  textarea: string[];
  dropdown: string[];
  datepicker: string[];
  options: string[];
  radio: string[];
  image: string[];
}

export interface Option {
  id: string;
  value: string;
  text: string;
}

export interface FormCardData {
  title: string;
  author: string;
  description: string;
  type: string;
  date: string;
  option: string;
  radio: string;
  image: string;
}
