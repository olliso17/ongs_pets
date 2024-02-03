import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginUsecase } from 'src/usecases/login/login.usecase';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { UserRepository } from '../users/user.repository';
import { UsersModule } from '../users/users.module';
import { LoginRepository } from '../logins/login.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from '../logins/entities/login.entity';
import User from '../users/entities/user.entity';

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
    UserRepository,
    AuthGuard,
 
  ],
})
export class AuthModule { }
