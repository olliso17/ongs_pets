import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import CreateUserUsecase from './usecases/create.user.usecase';
import { UserRepository } from './repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { BaseEntity } from 'typeorm';
import { Login } from 'src/logins/entities/login.entity';
import { Ong } from 'src/ongs/entities/ong.entity';
import { userProviders } from './users.providers';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Login, Ong])
  ],
  controllers: [UsersController],
  providers: [
    CreateUserUsecase /*UserRepository*/,
    ...userProviders,
    {
      provide: "UseRepo",
      useClass: UserRepository,
    },
  ],
})
export class UsersModule {}
