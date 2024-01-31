import { Injectable } from '@nestjs/common';
import { CreateUserInputDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/user.repository';
import User from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    // @Inject("UserRepositoryInterface")
    // private userRepository: UserRepositoryInterface,
    private userRepository: UserRepository
  ) {}
  async create(createUserInputDto: CreateUserInputDto) {
   
      const user = new User(createUserInputDto);
      await this.userRepository.create(user);
      return {message:"success"};
    
  }

  findAll() {
    return `This action returns all users`;
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
