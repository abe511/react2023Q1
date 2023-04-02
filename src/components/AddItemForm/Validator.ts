class Validator {
  static required(value: number) {
    if (value === 0) {
      return 'This value is required.';
    }
    return '';
  }

  static minLength(value: number, min: number) {
    // if (value < min) {
    //   return `Minimum length is ${min}`;
    // }
    // return '';
    return value < min;
  }

  static maxLength(value: number, max: number) {
    // if (value > max) {
    //   return `Maximum length is ${max}`;
    // }
    // return '';
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
    // if (Validator.minLength(value.length, min)) {
    if (value.length < min) {
      errors.push(`Minimum length is ${min}`);
      // } else if (Validator.maxLength(value.length, max)) {
    } else if (value.length > max) {
      errors.push(`Maximum length is ${max}`);
    }
    if (!Validator.isCapitalized(value)) {
      console.log('not cap', value);
      console.log('errs', errors);
      errors.push('This field should start with uppercase character');
    }
    // if (required) {
    //   return ['This value is required'];
    // }
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
    // if (Validator.minLength(value.length, min)) {
    if (value.length < min) {
      errors.push(`Minimum length is ${min}`);
      // } else if (Validator.maxLength(value.length, max)) {
    } else if (value.length > max) {
      errors.push(`Maximum length is ${max}`);
    }
    if (!Validator.isCapitalized(value)) {
      console.log('not cap', value);
      console.log('errs', errors);
      errors.push('This field should start with uppercase character');
    }
    // if (required) {
    //   return ['This value is required'];
    // }
    return errors;
  }
}

export default Validator;
