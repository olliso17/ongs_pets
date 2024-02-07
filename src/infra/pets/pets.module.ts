import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { PetsController } from './pets.controller';
import CreatePetUsecase from '../../usecases/pets/create.pet.usecase';
import { PetRepository } from './pets.repository';
import FindPetByIdUsecase from '../../usecases/pets/find.by.pet.id';
import FindAllActivePetsUsecase from '../../usecases/pets/find.all.active.pet.usecase';
import { EditPetUsecase } from '../../usecases/pets/edit.pet.usecase';
import ActivatePetUsecase from '../../usecases/pets/activate.pet.usecase';
import { RedisPetsRepository } from '../cache/redis-pets-repository';
import { RedisService } from '../../redis';
import { AuthGuard } from '../auth/auth.guard';


@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  controllers: [PetsController],
  providers: [
    CreatePetUsecase, PetRepository, FindPetByIdUsecase, FindAllActivePetsUsecase, EditPetUsecase, ActivatePetUsecase, RedisPetsRepository, RedisService, AuthGuard, 
  ],
})
export class PetsModule { }
