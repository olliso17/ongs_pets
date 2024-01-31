import { Inject, Injectable } from "@nestjs/common";
import UserRepositoryInterface from "../repository/user.repository.interface";
import { CreateUserInputDto, CreateUserOutputDto } from "../dto/create-user.dto";
import User from "../entities/user.entity";

@Injectable()
export default class CreateUserUsecase {
  constructor(
    @Inject("UseRepo")
    private readonly userRepository: UserRepositoryInterface,
  ) {}
  async execute(createUserDto: CreateUserInputDto ){
    const user = new User(createUserDto);
    
    await this.userRepository.create(user);
    return user;
  }
}
