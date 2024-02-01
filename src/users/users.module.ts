import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "./entities/user.entity";
import { UserRepository } from "./user.repository";
import CreateUseUsecase from "src/usecases/create.user.usecase";
import FindUserByIdUseUsecase from "src/usecases/find.by.user.id";
import FindUserByEmailUseUsecase from "src/usecases/find.by.user.email";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService, CreateUseUsecase, FindUserByIdUseUsecase, FindUserByEmailUseUsecase, UserRepository
    // {
    //   provide: "UseRepo",
    //   useClass: UserRepository,
    // },
  ],
})
export class UsersModule {}
