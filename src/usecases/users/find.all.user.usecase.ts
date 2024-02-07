import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../infra/users/user.repository";
import User from "../../infra/users/entities/user.entity";

@Injectable()
export default class FindAllUsersUsecase {
  constructor(
    // @Inject("UserRepo")
    private usersRepository: UserRepository,
  ) {}
  async execute(): Promise<User[]> {
    try {
      const users = await this.usersRepository.findAll();
      return users;
    } catch (err) {
      return err;
    }
  }
}
