import { Injectable } from "@nestjs/common";
import {
  CreateUserInputDto,
  CreateUserOutputDto,
} from "src/users/dto/create-user.dto";
import User from "src/users/entities/user.entity";
import { UserRepository } from "src/users/user.repository";

const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
@Injectable()
export default class CreateUseUsecase {
  private readonly rabbitMQUrl = "amqp://localhost";
  private readonly queueName = "product_queue";
  constructor(
    // @Inject("UserRepo")
    private usersRepository: UserRepository,
  ) {}
  async create(
    createUserDto: CreateUserInputDto,
  ): Promise<CreateUserOutputDto> {
    const salt = process.env.SALT;

    createUserDto.email = bcrypt.hashSync(createUserDto.email, salt);
    createUserDto.name = bcrypt.hashSync(createUserDto.name, salt);
    createUserDto.password = bcrypt.hashSync(createUserDto.password, salt);
    const user = new User(createUserDto);

      try {
        await this.usersRepository.create(user);
        return { message: "user created successfully" };
      } catch (err) {
        return { message: "wrong credentials check again" };
      }
    }

}
