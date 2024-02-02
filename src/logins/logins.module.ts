import { Module } from "@nestjs/common";
import { LoginsController } from "./logins.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Login } from "./entities/login.entity";
import User from "src/users/entities/user.entity";
import { LoginUsecase } from "src/usecases/login/login.usecase";
import { LoginRepository } from "./logins.repository";
import { UserRepository } from "src/users/user.repository";
import FindAllUsersUsecase from "src/usecases/users/find.all.user.usecase";
import CreateUseUsecase from "src/usecases/users/create.user.usecase";

@Module({
  imports: [TypeOrmModule.forFeature([Login, User])],
  controllers: [LoginsController],
  providers: [
    LoginUsecase,
    LoginRepository,
    UserRepository,
    FindAllUsersUsecase
  ],
})
export class LoginsModule {}
