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
export default class FindUserByEmailUseUsecase {
  constructor(
    // @Inject("UserRepo")
    private usersRepository: UserRepository,
  ) {}
  async execute(email: string): Promise<User | { message: string }> {
     const salt = process.env.SALT;

     email =  bcrypt.hashSync(
       email,
       salt,
     );
    try {
      const user = await this.usersRepository.findEmail(email);

      return user;
    } catch (err) {
      return { message: "user not found" };
    }
  }
}
