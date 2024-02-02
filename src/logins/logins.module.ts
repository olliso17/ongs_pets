import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Login } from "./entities/login.entity";
import User from "src/users/entities/user.entity";
import { LoginRepository } from "./logins.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Login, User])],
  providers: [LoginRepository],
})
export class LoginsModule {}
