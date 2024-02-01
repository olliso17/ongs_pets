import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInputDto, CreateUserOutputDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';
import { MinCountCaractersPassword, StringNotNullAndBlankSpace } from 'src/util/verify.regex';
const bcrypt = require("bcryptjs");
@Injectable()
export class UsersService {
  constructor(
    // @Inject("UserRepo")
    private usersRepository: UserRepository,

  ) {}


  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  encryptValue(
    value: string,
    type:string
  ) {
    if (StringNotNullAndBlankSpace.test(value) === false) {
      throw new Error(type+"is required.");
    }
    if(type === "Password" && MinCountCaractersPassword.test(value)){
      throw new Error("Password must be at least 4 characters long.");
    }
    const salt = bcrypt.genSaltSync(10);
    bcrypt.hashSync(value, salt);
    return value;
  }
}
