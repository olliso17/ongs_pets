import { Test, TestingModule } from '@nestjs/testing';
import { OngsController } from './ongs.controller';
import CreateOngUsecase from 'src/usecases/ongs/create.ong.usecase';
import FindOngByIdUsecase from 'src/usecases/ongs/find.by.ong.id';
import { EditOngUsecase } from 'src/usecases/ongs/edit.ong.usecase';
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
