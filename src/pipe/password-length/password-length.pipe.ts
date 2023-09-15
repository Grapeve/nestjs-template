import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PasswordLengthPipe implements PipeTransform {
  constructor(private readonly minLength: number) {}

  transform(value: any, metadata: ArgumentMetadata): any {
    const password = value.password;
    if (password.length < this.minLength) {
      throw new BadRequestException(`密码长度要至少为${this.minLength}位数`);
    }
    return value;
  }
}
