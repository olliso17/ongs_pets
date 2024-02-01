import { Injectable } from "@nestjs/common";
import { CreateUserOutputDto } from "src/users/dto/create-user.dto";
import { FindByIdUserInputDto } from "src/users/dto/update-user.dto";
import { UserRepository } from "src/users/user.repository";

@Injectable()
export default class ActivateUseUsecase {
  private readonly rabbitMQUrl = "amqp://localhost";
  private readonly queueName = "product_queue";
  constructor(
    // @Inject("UserRepo")
    private usersRepository: UserRepository,
  ) {}
  async update(
    findByIdUserDto: FindByIdUserInputDto,
  ): Promise<CreateUserOutputDto> {
    const existUser = await this.usersRepository.find(findByIdUserDto.id);

    if (existUser !== null) {
      existUser.active = findByIdUserDto.active;
      existUser.updated_at = new Date();
      try {
        await this.usersRepository.active(existUser);
        return { message: "user updated successfully" };
      } catch (err) {
        return { message: "wrong credentials check again" };
      }
    }
    return { message: "wrong credentials check again" };
  }
}
