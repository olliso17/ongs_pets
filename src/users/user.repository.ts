import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import User from "./entities/user.entity";
import { FindByIdUserInputDto } from "./dto/update-user.dto";

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private typeOrm: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    const new_user = await this.typeOrm.save(user);
    return new_user;
  }
  async find(id: string): Promise<User> {
    const user = await this.typeOrm.findOneOrFail({ where: { id: id } });
    return user;
  }
  async findEmail(email: string): Promise<User> {
    const user = await this.typeOrm.findOneOrFail({ where: { email: email } });
    return user;
  }
  async active(user: User): Promise<User> {
    const new_user = await this.typeOrm.save(user);
    return new_user;
  }
  // findAll() {
  //   this.typeOrm.find();
  // }
  // update(updateUserDto: UpdateUserDto): Promise<User> {
  //   throw new Error("Method not implemented.");
  // }
  // isActiveUserId(user_id: string, status: any): Promise<User> {
  //   throw new Error("Method not implemented.");
  // }
}
