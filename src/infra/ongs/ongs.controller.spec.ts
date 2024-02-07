import { Test, TestingModule } from '@nestjs/testing';
import { OngsController } from './ongs.controller';
import CreateOngUsecase from '../../usecases/ongs/create.ong.usecase';
import { EditOngUsecase } from '../../usecases/ongs/edit.ong.usecase';
import FindOngByIdUsecase from '../../usecases/ongs/find.by.ong.id';
describe('OngsController', () => {
  let controller: OngsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OngsController],
      providers: [CreateOngUsecase, FindOngByIdUsecase, EditOngUsecase],
    }).compile();

    controller = module.get<OngsController>(OngsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
