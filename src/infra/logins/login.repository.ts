import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Login } from "./entities/login.entity";
import { LogoutDto } from './dto/logout.dto';

@Injectable()
export class LoginRepository {
  constructor(

    @InjectRepository(Login)
    private typeOrmLogin: Repository<Login>,
  ) { }

  async createLogin(login: Login): Promise<Login> {
    const new_login = await this.typeOrmLogin.save(login);
    return new_login;
  }
  async findTokenLogin(token: string): Promise<Login> {
    const login = await this.typeOrmLogin.findOneOrFail({
      where: { token: token }
    });
    return login;
  }
  async update(logoutDto: Login) {
    return await this.typeOrmLogin.save(logoutDto);
  }


}
