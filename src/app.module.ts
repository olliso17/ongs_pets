import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { LoginsModule } from "./logins/logins.module";
import { DonationsModule } from "./donations/donations.module";
import { PetsModule } from "./pets/pets.module";
import { OngsModule } from "./ongs/ongs.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import dataSource, { dataSourceOptions } from "db/data-source";

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    OngsModule,
    PetsModule,
    DonationsModule,
    LoginsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
