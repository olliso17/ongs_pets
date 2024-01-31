import { Module } from "@nestjs/common";
import { OngsService } from "./ongs.service";
import { OngsController } from "./ongs.controller";
import { DonationEntity } from "src/donations/entities/donation.entity";
import { Ong } from "./entities/ong.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PetEntity } from "src/pets/entities/pet.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([DonationEntity, Ong, PetEntity])
  ],
  controllers: [OngsController],
  providers: [OngsService],
})
export class OngsModule {}
