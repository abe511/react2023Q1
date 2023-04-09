class Validator {
  static minLength(value: number, min: number) {
    return value < min;
  }

  static maxLength(value: number, max: number) {
    return value > max;
  }

  static isCapitalized(value: string) {
    const capitalized = value[0].toUpperCase() + value.slice(1).toLowerCase();
    return value === capitalized;
  }

  // eslint-disable-next-line class-methods-use-this
  textField(value: string | undefined, min: number, max: number, required = false) {
    if (value === undefined) {
      if (required) {
        return ['This field cannot be empty'];
      }
      return [];
    }
    const errors: string[] = [];
    // if (value.length < min) {
    if (Validator.minLength(value.length, min)) {
      errors.push(`Minimum length is ${min}`);
      // } else if (value.length > max) {
    } else if (Validator.maxLength(value.length, max)) {
      errors.push(`Maximum length is ${max}`);
    }
    if (!Validator.isCapitalized(value)) {
      errors.push('This field should start with uppercase character');
    }
    return errors;
  }

  // eslint-disable-next-line class-methods-use-this
  textArea(value: string | undefined, min: number, max: number, required = false) {
    if (value === undefined) {
      if (required) {
        return ['This field cannot be empty'];
      }
      return [];
    }
    const errors: string[] = [];
    // if (value.length < min) {
    if (Validator.minLength(value.length, min)) {
      errors.push(`Minimum length is ${min}`);
      // } else if (value.length > max) {
    } else if (Validator.maxLength(value.length, max)) {
      errors.push(`Maximum length is ${max}`);
    }
    return errors;
  }

  // eslint-disable-next-line class-methods-use-this
  dropdownField(value: string | undefined, required = false) {
    if (value === 'none' && required) {
      return ['Select an option'];
    }
    return [];
  }

  // eslint-disable-next-line class-methods-use-this
  datePicker(selectedDate: number | typeof NaN | undefined, min: Date, required = false) {
    if (required) {
      if (selectedDate === undefined || Number.isNaN(selectedDate)) {
        return ['Select date'];
      }
      const startOfToday = min.setHours(0, 0, 0, 0);
      if (selectedDate < startOfToday) {
        return ['Select date starting from today'];
      }
    }

    return [];
  }

  // eslint-disable-next-line class-methods-use-this
  optionField(values: [string, string][], required: number) {
    if (required) {
      const result = values.reduce((acc, [key, value]) => {
        if (key.includes('option') && value) {
          // eslint-disable-next-line no-param-reassign
          acc += 1;
        }
        return acc;
      }, 0);
      if (result < required) {
        return [`Select at least ${required} option`];
      }
    }
    return [];
  }

  // eslint-disable-next-line class-methods-use-this
  radioGroupField(value: string, required: boolean) {
    if (required && value === '') {
      return [`Make a choice`];
    }

    return [];
  }

  // eslint-disable-next-line class-methods-use-this
  imageUploadField(imageName: string | undefined, required = false) {
    if (imageName === '' && required) {
      return ['Select an image'];
    }
    return [];
  }
}

export default Validator;
