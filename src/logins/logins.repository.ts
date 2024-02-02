import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Login } from "./entities/login.entity";

@Injectable()
export class LoginRepository {
  constructor(
    @InjectRepository(Login)
    private typeOrm: Repository<Login>,
  ) {}

  async create(Login: Login): Promise<Login> {
    const new_Login = await this.typeOrm.save(Login);
    return new_Login;
  }
//   async find(id: string): Promise<Login> {
//     const Login = await this.typeOrm.findOneOrFail({
//       where: { id: id },
//       relations: ["ongs"],
//     });
//     return Login;
//   }

//   async active(Login: Login): Promise<Login> {
//     const new_Login = await this.typeOrm.save(Login);
//     return new_Login;
//   }
//   async findAll(): Promise<Login[]> {
//     const Logins = await this.typeOrm.find();
//     return Logins;
//   }
//   async update(Login: Login): Promise<Login> {
//     const new_Login = await this.typeOrm.save(Login);
//     return new_Login;
//   }
  // isActiveLoginId(Login_id: string, status: any): Promise<Login> {
  //   throw new Error("Method not implemented.");
  // }
}
