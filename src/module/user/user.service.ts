import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) // 注入数据库实体
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const res = await this.userRepository.save(createUserDto);
    return res;
  }

  async findAll() {
    const allUsers = await this.userRepository.findBy({
      username: 'Chengxiao',
    });
    return allUsers;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
