import { Module } from '@nestjs/common';
import { LoginsService } from './logins.service';
import { LoginsController } from './logins.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import User from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Login])],
  controllers: [LoginsController],
  providers: [LoginsService],
})
export class LoginsModule {}
