import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import CreateUseUsecase from '../../usecases/users/create.user.usecase';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [CreateUseUsecase],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
