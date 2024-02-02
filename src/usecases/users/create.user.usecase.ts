import { Injectable } from "@nestjs/common";
import { Login } from "src/logins/entities/login.entity";
import {
  CreateUserInputDto,
  CreateUserOutputDto,
} from "src/users/dto/create-user.dto";
import User from "src/users/entities/user.entity";
import { UserRepository } from "src/users/user.repository";

const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const os = require("os");
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
    const networkInfo = os.networkInterfaces();
    const salt = process.env.SALT;
    const token = bcrypt.hashSync(
      createUserDto.email + createUserDto.password + "token",
      salt,
    );
    createUserDto.email = bcrypt.hashSync(createUserDto.email, salt);
    createUserDto.name = bcrypt.hashSync(createUserDto.name, salt);
    createUserDto.password = bcrypt.hashSync(createUserDto.password, salt);
    const user = new User(createUserDto);

    try {
      const create_user = await this.usersRepository.create(user);
      const login = new Login({
        user_id: create_user.id,
        token: token,
        localhost: networkInfo.lo[0].address,
      });
      await this.usersRepository.createLogin(login);
      return { message: "user created successfully" };
    } catch (err) {
      return { message: "credentials invalid" };
    }
  }
}
