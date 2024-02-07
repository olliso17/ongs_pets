import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Login } from "./entities/login.entity";

@Injectable()
export class LoginRepository {
  constructor(
  
    @InjectRepository(Login)
    private typeOrmLogin: Repository<Login>,
  ) {}

  async createLogin(login: Login): Promise<Login> {
    const new_login = await this.typeOrmLogin.save(login);
    return new_login;
  }
  async findLogin(id: string): Promise<string> {
    const login = await this.typeOrmLogin.findOneOrFail({
      where: { user_id: id }
    });
    return login.token;
  }



}
