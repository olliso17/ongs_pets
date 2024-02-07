import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DonationsModule } from "./infra/donations/donations.module";
import { PetsModule } from "./infra/pets/pets.module";
import { OngsModule } from "./infra/ongs/ongs.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "db/data-source";
import { UsersModule } from "./infra/users/users.module";
import { AuthModule } from './infra/auth/auth.module';
import { ValidationModule } from './validation/validation.module';

const dotenv = require("dotenv");
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    OngsModule,
    PetsModule,
    DonationsModule,
    AuthModule,
    ValidationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
