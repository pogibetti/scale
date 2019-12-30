import { defaultValidator, ValidatorEntry } from './validator';

describe('entry validator', () => {
  it('returns a name', () => {
    const validatorEntry: ValidatorEntry = {
      name: 'validator',
      options: 'z.B. string',
    };
    expect(validatorEntry.name).toEqual('validator');
  });
  it('returns a string for options', () => {
    const validatorEntry: ValidatorEntry = {
      name: 'validator',
      options: 'z.B. string',
    };
    expect(validatorEntry.options).toEqual('z.B. string');
  });
  it('returns a number for options', () => {
    const validatorEntry: ValidatorEntry = {
      name: 'validator',
      options: 15,
    };
    expect(validatorEntry.options).toEqual(15);
  });
  it('returns a boolean for options', () => {
    const validatorEntry: ValidatorEntry = {
      name: 'validator',
      options: false,
    };
    expect(validatorEntry.options).toEqual(false);
  });
});

describe('defaultValidator', () => {
  it('returns default validator', () => {
    const defaultValidatorMock = jest.fn(() => true);
    expect(defaultValidator.validate(defaultValidatorMock)).toEqual(true);
  });
});
