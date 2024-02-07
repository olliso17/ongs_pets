import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "./entities/user.entity";
import { Login } from "../logins/entities/login.entity";
import { UsersController } from "./users.controller";
import ActivateUseUsecase from "../../usecases/users/activate.user.usecase";
import CreateUseUsecase from "../../usecases/users/create.user.usecase";
import FindUserByIdUsecase from "../../usecases/users/find.by.user.id";
import FindAllUsersUsecase from "../../usecases/users/find.all.user.usecase";
import { UserRepository } from "./user.repository";
import { LoginRepository } from "../logins/login.repository";
import EditPasswordUserUsecase from "../../usecases/users/edit.user.usecase";
import { LoginUsecase } from "../../usecases/login/login.usecase";
import { AuthGuard } from "../auth/auth.guard";

@Module({
  imports: [TypeOrmModule.forFeature([User, Login])],
  controllers: [UsersController],
  providers: [
    ActivateUseUsecase,
    CreateUseUsecase,
    FindUserByIdUsecase,
    FindAllUsersUsecase,
    UserRepository,
    LoginRepository,
    EditPasswordUserUsecase,
    LoginUsecase,
    AuthGuard

  ],
  exports: [UserRepository]
})
export class UsersModule {}
