// export type InputField = 'title' | 'second' | 'third' | 'textArea';

export interface Errors {
  title: string[];
  second: string[];
  textArea: string[];
}

export interface Option {
  id: string;
  value: string;
  text: string;
}
