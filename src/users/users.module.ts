import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "./entities/user.entity";
import { UserRepository } from "./user.repository";
import ActivateUseUsecase from "src/usecases/users/activate.user.usecase";
import CreateUseUsecase from "src/usecases/users/create.user.usecase";
import FindUserByIdUsecase from "src/usecases/users/find.by.user.id";
import FindAllUsersUsecase from "src/usecases/users/find.all.user.usecase";
import EditPasswordUserUsecase from "src/usecases/users/edit.user.usecase";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    ActivateUseUsecase,
    CreateUseUsecase,
    FindUserByIdUsecase,
    FindAllUsersUsecase,
    UserRepository,
    EditPasswordUserUsecase
    // {
    //   provide: "UseRepo",
    //   useClass: UserRepository,
    // },
  ],
})
export class UsersModule {}
