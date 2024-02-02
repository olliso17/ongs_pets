import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import User from "./entities/user.entity";
import { FindByIdUserInputDto } from "./dto/active-user.dto";
import { Login } from "src/logins/entities/login.entity";

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private typeOrm: Repository<User>,
    @InjectRepository(Login)
    private typeOrmLogin: Repository<Login>,
  ) {}

  async create(user: User): Promise<User> {
    const new_user = await this.typeOrm.save(user);
    return new_user;
  }
  async createLogin(login: Login): Promise<Login> {
    const new_login = await this.typeOrmLogin.save(login);
    return new_login;
  }
  async find(id: string): Promise<User> {
    const user = await this.typeOrm.findOneOrFail({
      where: { id: id },
      relations: ["ongs"],
    });
    return user;
  }

  async active(user: User): Promise<User> {
    const new_user = await this.typeOrm.save(user);
    return new_user;
  }
  async findAll(): Promise<User[]> {
    const users = await this.typeOrm.find();
    return users;
  }
  async update(user: User): Promise<User> {
    const new_user = await this.typeOrm.save(user);
    return new_user;
  }
  // isActiveUserId(user_id: string, status: any): Promise<User> {
  //   throw new Error("Method not implemented.");
  // }
}
