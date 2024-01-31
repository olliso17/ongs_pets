import { UpdateUserDto } from "../dto/update-user.dto";
import User from "../entities/user.entity";
import UserRepositoryInterface from "./user.repository.interface";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(
    @InjectRepository(User)
    //private // private readonly prisma: PrismaClient
    private typeOrm: Repository<User>
  ) {}

  async create(user: User): Promise<User> {
    const new_user = await this.typeOrm.save(user);
    return new_user;
  }
  findAll() {
    this.typeOrm.find();
  }
  update(updateUserDto: UpdateUserDto): Promise<User> {
    throw new Error("Method not implemented.");
  }
  isActiveUserId(user_id: string, status: any): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
