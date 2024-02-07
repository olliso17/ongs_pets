import { Test, TestingModule } from '@nestjs/testing';
import { PetsController } from './pets.controller';
import CreatePetUsecase from '../../usecases/pets/create.pet.usecase';
import { PetRepository } from './pets.repository';
import FindPetByIdUsecase from '../../usecases/pets/find.by.pet.id';
import FindAllActivePetsUsecase from '../../usecases/pets/find.all.active.pet.usecase';
import ActivatePetUsecase from '../../usecases/pets/activate.pet.usecase';
import { EditPetUsecase } from '../../usecases/pets/edit.pet.usecase';

describe('PetsController', () => {
  let controller: PetsController;
  let petRepository: PetRepository;
  let createPetUsecase: CreatePetUsecase;
  let findAllActivePetsUsecase: FindAllActivePetsUsecase;
  let findPetByIdUsecase: FindPetByIdUsecase;
  let activatePetUsecase: ActivatePetUsecase;
  let editPetUsecase: EditPetUsecase;

  beforeEach(() => {
    const typeOrmMock: any = {};
    petRepository = new PetRepository(typeOrmMock);
    createPetUsecase = new CreatePetUsecase(petRepository);
    findPetByIdUsecase = new FindPetByIdUsecase(petRepository);
    findAllActivePetsUsecase = new FindAllActivePetsUsecase(petRepository);
    controller = new PetsController(createPetUsecase, findPetByIdUsecase, findAllActivePetsUsecase, editPetUsecase, activatePetUsecase)
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
