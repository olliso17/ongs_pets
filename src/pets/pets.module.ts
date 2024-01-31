import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ong } from 'src/ongs/entities/ong.entity';
import { PetEntity } from './entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ Ong, PetEntity])],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
