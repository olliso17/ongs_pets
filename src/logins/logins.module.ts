import { Module } from '@nestjs/common';
import { LoginsService } from './logins.service';
import { LoginsController } from './logins.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import User from 'src/users/entities/user.entity';
import { LoginUsecase } from 'src/usecases/login/login.usecase';
import { LoginRepository } from './logins.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Login, User])],
  controllers: [LoginsController],
  providers: [LoginUsecase, LoginRepository],
})
export class LoginsModule {}
