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
}

export default Validator;
