import { IsNotEmpty, Validate } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  CustomPasswordLength,
  IsUserPasswordCorrect,
} from '../../pipe/password-length/password-length.validate';

@Injectable()
export class CreateUserDto {
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  @ApiProperty({
    example: '',
  })
  username: string;

  @IsNotEmpty({
    message: '密码不能为空',
  })
  @ApiProperty({
    example: '',
  })
  // @Validate(CustomPasswordLength, {})
  @IsUserPasswordCorrect()
  password: string;
}
