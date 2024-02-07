import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { UserRepository } from '../users/user.repository';
import { LoginRepository } from '../logins/login.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from '../logins/entities/login.entity';
import User from '../users/entities/user.entity';
import { LoginUsecase } from '../../usecases/login/login.usecase';
import { LogoutUsecase } from '../../usecases/login/logout.usecase';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SALT,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([Login, User])
  ],
  controllers: [AuthController],
  providers: [
    LoginUsecase,
    LoginRepository,
    LogoutUsecase,
    UserRepository,
    AuthGuard,

  ],
})
export class AuthModule { }
