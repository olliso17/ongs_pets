import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import CreatePetUsecase from 'src/usecases/pets/create.pet.usecase';
import { PetRepository } from './pets.repository';
import FindPetByIdUsecase from 'src/usecases/pets/find.by.pet.id';
import FindAllActivePetsUsecase from 'src/usecases/pets/find.all.active.pet.usecase';
import { EditPetUsecase } from 'src/usecases/pets/edit.pet.usecase';
import ActivatePetUsecase from 'src/usecases/pets/activate.pet.usecase';
import { RedisPetsRepository } from '../cache/redis-pets-repository';
import { RedisService } from 'src/redis';
import { AuthGuard } from '../auth/auth.guard';


@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  controllers: [PetsController],
  providers: [
    CreatePetUsecase, PetRepository, FindPetByIdUsecase, FindAllActivePetsUsecase, EditPetUsecase, ActivatePetUsecase, RedisPetsRepository, RedisService, AuthGuard, 
  ],
})
export class PetsModule { }
