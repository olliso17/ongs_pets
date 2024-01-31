import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OngsModule } from './ongs/ongs.module';
import { UsersModule } from './users/users.module';
import { LoginsModule } from './logins/logins.module';
import { PetsModule } from './pets/pets.module';
import { DonationsModule } from './donations/donations.module';
import { UsersController } from './users/users.controller';
import CreateUserUsecase from './users/usecases/create.user.usecase';
import { dataSourceOptions } from 'db/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),OngsModule, UsersModule, LoginsModule, PetsModule, DonationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
