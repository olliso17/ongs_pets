import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserRepository } from "src/infra/users/user.repository";
import { Login } from "src/infra/logins/entities/login.entity";
import * as bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { LoginInputDto } from "src/infra/logins/dto/login.dto";
import { LoginRepository } from "src/infra/logins/login.repository";

const dotenv = require("dotenv");
const os = require("os");
dotenv.config();
@Injectable()
export class LoginUsecase {
  constructor(
    private userRepository: UserRepository,
    private loginRepository: LoginRepository
    ) {}

  async execute(input: LoginInputDto): Promise<string> {
    const users = await this.userRepository.findAll();
    const networkInfo = os.networkInterfaces();
    const salt = process.env.SALT;

  
    const hashedEmail = bcrypt.hashSync(input.email, salt);
    const hashedPassword = bcrypt.hashSync(input.password, salt);

    const isUser = users.find(
      (user) => user.email === hashedEmail && user.password === hashedPassword
    );

    if (!isUser) {
      throw new UnauthorizedException("Credentials invalid");
    }

    const token = bcrypt.hashSync(`${isUser.id}${uuidv4()}`, salt);

   
    const login = new Login({
      user_id: isUser.id,
      token: token,
      localhost: networkInfo.lo[0].address,
    });

   
    try {
      await this.loginRepository.createLogin(login); 
      return token;
    } catch (err) {
      throw new UnauthorizedException("Failed to generate token");
    }
  }
}
