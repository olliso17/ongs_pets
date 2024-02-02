import { LoginInputDto, LoginOutputDto } from "src/logins/dto/login.dto";
import { LoginRepository } from "src/logins/logins.repository";
import User from "src/users/entities/user.entity";
import { UserRepository } from "src/users/user.repository";
import { Inject, Injectable } from "@nestjs/common";
import { Login } from "src/logins/entities/login.entity";

const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const os = require("os");
dotenv.config();

Injectable();
export class LoginUsecase {
  constructor(
    private  loginRepository: LoginRepository,
    private  userRepository: UserRepository,
  ) {}
  async execute(input: LoginInputDto) {
    // const networkInfo = os.networkInterfaces();
    // const salt = process.env.SALT;
    // const token = bcrypt.hashSync(input.email + input.password + "token", salt);
    // let isUser: User;
    // input.email = bcrypt.hashSync(input.email, salt);
    // input.password = bcrypt.hashSync(input.password, salt);
    // users.map( user => {
    //   if (user.email === input.email && user.password === input.password) {
    //     isUser = user;
    //   }
    // });

    // if (isUser.id !== "") {
    //   return { message: "Credentials invalid" };
    // }
    // const login = new Login({
    //   user_id: isUser.id,
    //   token: token,
    //   localhost: networkInfo.lo[0].address,
    // });

    try {
     const users = await this.userRepository.findAll();
      return users;
    } catch (err) {
      return err;
    }
  }
}
