import { Injectable } from "@nestjs/common";
import { Login } from "src/infra/logins/entities/login.entity";
import { LoginRepository } from "src/infra/logins/login.repository";
import { CreateUserInputDto, CreateUserOutputDto } from "src/infra/users/dto/create-user.dto";
import User from "src/infra/users/entities/user.entity";
import { UserRepository } from "src/infra/users/user.repository";

const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const os = require("os");
const jwt = require('jsonwebtoken');
dotenv.config();
@Injectable()
export default class CreateUseUsecase {
  private readonly rabbitMQUrl = "amqp://localhost";
  private readonly queueName = "product_queue";
  constructor(
    private usersRepository: UserRepository,
    private loginRepository: LoginRepository,
  ) {}
  async create(
    createUserDto: CreateUserInputDto,
  ): Promise<CreateUserOutputDto> {
    const networkInfo = os.networkInterfaces();
    const salt = process.env.SALT;
   
    createUserDto.email = bcrypt.hashSync(createUserDto.email, salt);
    createUserDto.name = bcrypt.hashSync(createUserDto.name, salt);
    createUserDto.password = bcrypt.hashSync(createUserDto.password, salt);
    const user = new User(createUserDto);
    const options = {
      expiresIn: '3h',
    };
    const token = jwt.sign(
      {nome:createUserDto.email},
      salt,options
    );

    try {
      const create_user = await this.usersRepository.create(user);
      const login = new Login({
        user_id: create_user.id,
        token: token,
        localhost: networkInfo.lo[0].address,
      });
      await this.loginRepository.createLogin(login);
      
      return { message: 'created successfully', token:token};
    } catch (err) {
      return { message: "credentials invalid" };
    }
  }
}
