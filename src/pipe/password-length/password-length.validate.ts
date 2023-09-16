import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
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
