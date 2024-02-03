import { LoginInputDto, LoginOutputDto } from "src/infra/logins/dto/login.dto";
import { Injectable } from "@nestjs/common";
import { Login } from "src/infra/logins/entities/login.entity";
import { UserRepository } from "src/infra/users/user.repository";
import User from "src/infra/users/entities/user.entity";

const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const os = require("os");
dotenv.config();

Injectable();
export class LoginUsecase {
  constructor(private userRepository: UserRepository) {}
  async execute(input: LoginInputDto) {
    const users = await this.userRepository.findAll();
    const networkInfo = os.networkInterfaces();
    const salt = process.env.SALT;
    const token = bcrypt.hashSync(input.email + input.password + "token", salt);
    let isUser: User;
    input.email = bcrypt.hashSync(input.email, salt);
    input.password = bcrypt.hashSync(input.password, salt);

    users.map(user => {
      if (user.email === input.email && user.password === input.password) {
        isUser = user;
      }
    });

    if (isUser.id !== "") {
      return { message: "Credentials invalid" };
    }
    const login = new Login({
      user_id: isUser.id,
      token: token,
      localhost: networkInfo.lo[0].address,
    });

    try {
      return users;
    } catch (err) {
      return err;
    }
  }
}
