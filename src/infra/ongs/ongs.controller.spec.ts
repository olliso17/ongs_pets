import { OngsController } from './ongs.controller';
import FindOngByIdUsecase from '../../usecases/ongs/find.by.ong.id';
import { OngRepository } from './ongs.repository';
import { UserRepository } from '../users/user.repository';
import FindAllOngsUsecase from '../../usecases/ongs/find.all.ong.usecase copy';
import { EditOngUsecase } from '../../usecases/ongs/edit.ong.usecase';
import CreateOngUsecase from '../../usecases/ongs/create.ong.usecase';
import ActivateOngUsecase from '../../usecases/ongs/activate.ong.usecase';
import FindAllActiveOngsUsecase from '../../usecases/ongs/find.all.active.ong.usecase';
describe('OngsController', () => {
  let controller: OngsController;
  let ongRepository: OngRepository;
  let createOngUsecase: CreateOngUsecase;
  let userRepository: UserRepository;
  let findAllOngsUsecase: FindAllOngsUsecase;
  let findAllActiveOngsUsecase: FindAllActiveOngsUsecase;
  let activateOngUsecase: ActivateOngUsecase;
  let editOngUsecase: EditOngUsecase;
  let findOngByIdUsecase: FindOngByIdUsecase;

  beforeEach(() => {
    const typeOrmMock: any = {};
    ongRepository = new OngRepository(typeOrmMock);
    userRepository = new UserRepository(typeOrmMock);
    createOngUsecase = new CreateOngUsecase(ongRepository, userRepository);
    findAllOngsUsecase = new FindAllOngsUsecase(ongRepository);
    findAllActiveOngsUsecase = new FindAllActiveOngsUsecase(ongRepository);
    activateOngUsecase = new ActivateOngUsecase(ongRepository);
    editOngUsecase = new EditOngUsecase(ongRepository);
    findOngByIdUsecase = new FindOngByIdUsecase(ongRepository);
    controller = new OngsController(createOngUsecase, findOngByIdUsecase, editOngUsecase, activateOngUsecase, findAllOngsUsecase, findAllActiveOngsUsecase)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
