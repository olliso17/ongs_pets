import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "./entities/user.entity";
import { UserRepository } from "./user.repository";
import ActivateUseUsecase from "src/usecases/users/activate.user.usecase";
import CreateUseUsecase from "src/usecases/users/create.user.usecase";
import FindUserByIdUseUsecase from "src/usecases/users/find.by.user.id";
import FindUserByEmailUseUsecase from "src/usecases/users/find.by.user.email";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    ActivateUseUsecase,
    CreateUseUsecase,
    FindUserByIdUseUsecase,
    FindUserByEmailUseUsecase,
    UserRepository,
    // {
    //   provide: "UseRepo",
    //   useClass: UserRepository,
    // },
  ],
})
export class UsersModule {}
