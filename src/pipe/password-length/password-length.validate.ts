import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ name: 'customPassword', async: false })
export class CustomPasswordLength implements ValidatorConstraintInterface {
  validate(password: string, args: ValidationArguments) {
    return password.length > 6 && password.length < 10;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Password ($value) is too short or too long!';
  }
}

export function IsUserPasswordCorrect(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: CustomPasswordLength,
    });
  };
}
