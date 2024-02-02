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
    private readonly loginRepository: LoginRepository,
  ) {}
  async execute(input: LoginInputDto) {
   

    // if (isUser.id !== "") {
    //   return { message: "Credentials invalid" };
    // }
    // const login = new Login({
    //   user_id: isUser.id,
    //   token: token,
    //   localhost: networkInfo.lo[0].address,
    // });

    try {
    //   await this.loginRepository.create(login);
      return { message: "Login successfully" };
    } catch (err) {
      return err;
    }
  }
}
