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
    // const salt = bcrypt.genSaltSync(10);
    // const salt = "$2b$10$abcdefghijklmnopqrstuv";
    const salt = process.env.SALT;

    createUserDto.email = bcrypt.hashSync(createUserDto.email, salt);
    createUserDto.name = bcrypt.hashSync(createUserDto.name, salt);
    createUserDto.password = bcrypt.hashSync(createUserDto.password, salt);
    const user = new User(createUserDto);
    // const existUser = await this.usersRepository.findEmail(user.email);

    // if (existUser === null) {
      try {
        await this.usersRepository.create(user);
        // await this.publishToQueue(JSON.stringify(user));
        return { message: "user created successfully" };
      } catch (err) {
        return { message: "wrong credentials check again" };
      }
    }
    // return { message: "wrong credentials check again" };
  // }
  // private async publishToQueue(message: string) {
  //   const connection = await amqp.connect(this.rabbitMQUrl);
  //   const channel = await connection.createChannel();
  //   await channel.assertQueue(this.queueName);
  //   channel.sendToQueue(this.queueName, Buffer.from(message));
  //   console.log(`Message sent to RabbitMQ: ${message}`);
  //   await channel.close();
  //   await connection.close();
  // }
}
