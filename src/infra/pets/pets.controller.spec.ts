import { Test, TestingModule } from '@nestjs/testing';
import { PetsController } from './pets.controller';
import CreatePetUsecase from '../../usecases/pets/create.pet.usecase';

describe('PetsController', () => {
  let controller: PetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetsController],
      providers: [CreatePetUsecase],
    }).compile();

    controller = module.get<PetsController>(PetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
