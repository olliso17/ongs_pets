import { Injectable } from "@nestjs/common";
import { FindByIdUserInputDto } from "src/infra/users/dto/active-user.dto";
import { CreateUserOutputDto } from "src/infra/users/dto/create-user.dto";
import { UserRepository } from "src/infra/users/user.repository";

@Injectable()
export default class ActivateUseUsecase {
  private readonly rabbitMQUrl = "amqp://localhost";
  private readonly queueName = "product_queue";
  constructor(
    // @Inject("UserRepo")
    private usersRepository: UserRepository,
  ) {}
  async update(id,
    findByIdUserDto: FindByIdUserInputDto,
  ): Promise<CreateUserOutputDto> {
    const existUser = await this.usersRepository.find(id);

    if (existUser !== null) {
      if (
        findByIdUserDto.active === existUser.active
      ) {
         return { message: "the status has already been implemented." };
      }
      if (
        findByIdUserDto.active !== existUser.active
      ) {
        existUser.active = findByIdUserDto.active;
        existUser.updated_at = new Date();

        await this.usersRepository.active(existUser);
        return { message: "user updated successfully." };
      }
    }
  }
}
